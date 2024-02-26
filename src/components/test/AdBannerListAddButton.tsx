import Button from 'components/shared/Button'

import { adBanners } from 'components/mock/data'
import { store } from 'firebase'

import { collection, doc, writeBatch } from 'firebase/firestore'
import { COLLECTIONS } from 'constants'
function AdBannerListButton() {
  const handlebuttonClick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((banner: any) => {
      // doc문서에 CARD컬렉션에 접근하겠다
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER))

      // 이문서에 card를 배치하면서 접근
      batch.set(docRef, banner)
    })

    // 커밋까지 해야 반영
    await batch.commit()

    alert('배너 리스트 추가완료!')
  }
  return <Button onClick={handlebuttonClick}>배너 리스트추가하기</Button>
}
export default AdBannerListButton
