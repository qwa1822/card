import Button from 'components/shared/Button'

import { card_list } from 'components/mock/data'
import { store } from 'firebase'

import { collection, doc, writeBatch } from 'firebase/firestore'
import { COLLECTIONS } from 'constants'
function CardListAddButton() {
  const handlebuttonClick = async () => {
    const batch = writeBatch(store)

    card_list.forEach((card: any) => {
      // doc문서에 CARD컬렉션에 접근하겠다
      const docRef = doc(collection(store, COLLECTIONS.CARD))

      // 이문서에 card를 배치하면서 접근
      batch.set(docRef, card)
    })

    // 커밋까지 해야 반영
    await batch.commit()

    alert('카드 리스트 추가완료!')
  }
  return <Button onClick={handlebuttonClick}>카드리스트 추가하기</Button>
}
export default CardListAddButton
