import { getCard, getCards } from 'components/remote/card'
import ListRow from 'components/shared/ListRow'
import Top from 'components/shared/Top'
import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import FixedBottomButton from 'components/shared/FixedBottomButton'
import Flex from 'components/shared/Flex'
import { Text } from 'components/shared/Text'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import useUser from 'hooks/auth/useUser'
import { useAlertContext } from 'contexts/AlertContext'
interface CardData {
  name: string
  corpName: string
  tags: string[]
  benefit: string[]
  promotion?: { title: string; terms: string } | undefined
  payback?: string | undefined
  id: string
}

export default function CardPage() {
  const navigate = useNavigate()

  const user = useUser()

  const { open } = useAlertContext()
  const { id = '' } = useParams()
  const { data } = useQuery<CardData>(['card', id], () => getCard(id), {
    enabled: id !== '',
  })
  if (!data) {
    return null
  }

  const { name, corpName, promotion, tags, benefit } = data

  const subTitle =
    promotion !== undefined ? removeHtmlTags(promotion.title) : tags.join(',')
  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />

      <ul>
        {benefit.map((text, index) => {
          return (
            <motion.li
              initial={{
                opacity: 0,
                translateX: -90,
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 0.1],
                delay: index * 0.1,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
            >
              <ListRow
                as="div"
                key={text}
                left={<IconCheck />}
                contents={
                  <ListRow.Texts
                    title={`헤택 ${index + 1}`}
                    subTitle={text}
                  ></ListRow.Texts>
                }
              ></ListRow>
            </motion.li>
          )
        })}
      </ul>

      {promotion != null ? (
        <Flex css={termsContainerStyles} direction="column">
          <Text bold={true}>유의사항</Text>
          <Text typography="t7">{removeHtmlTags(promotion.terms)}</Text>
        </Flex>
      ) : null}
      <FixedBottomButton
        label="신청하기"
        onClick={() => {
          navigate(`/apply/${id}`)
        }}
      />
    </div>
  )
}

function IconCheck() {
  return <FaCheck />
}

function removeHtmlTags(text: string) {
  let output = ''

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '<') {
      for (let j = i + 1; j < text.length; j++) {
        if (text[j] === '>') {
          i = j
          break
        }
      }
    } else {
      output += text[i]
    }
  }

  return output
}

const termsContainerStyles = css`
  margin-top: 80px;
  padding: 0 24px 80px 24px;
`
