import {
  QuerySnapshot,
  collection,
  getDoc,
  getDocs,
  limit,
  query,
  startAfter,
  orderBy, // orderBy 함수 추가
} from 'firebase/firestore'
import { store } from 'firebase'

import { COLLECTIONS } from 'constants'
import { Card } from 'models/card'

// pageParam 지금 보이고있는 맨 마지막 요소
export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    // 커서가 없을때
    pageParam == null
      ? // 최초의 호출이니깐 10개만호출
        query(collection(store, COLLECTIONS.CARD), limit(10))
      : query(
          collection(store, COLLECTIONS.CARD),

          // 그 커서로부터 10개
          startAfter(pageParam),
          limit(10),
        )

  const cardSnapshot = await getDocs(cardQuery)
  // 커서가 있을때

  // 마지막 커서요소
  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))

  return { items, lastVisible }
}
