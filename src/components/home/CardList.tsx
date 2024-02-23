import ListRow from 'components/shared/ListRow'

import { flatten } from 'lodash'
import { getCards } from 'components/remote/card'
import { useQuery, useInfiniteQuery } from 'react-query'
import { useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
function CardList() {
  // 첫번쨰는 키값 , 두번째는  pagepara을 받을수있고,
  // 세번째는 nextPageParms
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
    },
  )

  console.log('data', data)
  console.log('hastNext', hasNextPage)

  const cards = flatten(data?.pages?.map(({ items }) => items))

  const LoadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }

    fetchNextPage()
  }, [fetchNextPage, isFetching])
  if (data === null) {
    return null
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={LoadMore}
      >
        {cards?.map((card, idx) => {
          return (
            <ListRow
              contents={
                <ListRow.Texts
                  title={`${idx + 1}위`}
                  subTitle={card.name}
                ></ListRow.Texts>
              }
              left={<div>Left</div>}
              right={card.payback !== null ? <div>{card.payback}</div> : null}
              withArrow={true}
            />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default CardList
