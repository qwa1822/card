import { collection, getDoc, getDocs } from 'firebase/firestore'
import { store } from 'firebase'

import { COLLECTIONS } from 'constants'
import { AdBanner, Card } from 'models/card'

export async function getAddBanners() {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER),
  )

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}
