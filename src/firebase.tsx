import { FirebaseApp, getApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export let app: FirebaseApp
const {
  VITE_APIKEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET_ID,
  VITE_MESSAGEING_SEND_ID,
  VITE_APPID,
  VITE_MEASUEREMENTID,
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET_ID,
  messagingSenderId: VITE_MESSAGEING_SEND_ID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUEREMENTID,
}

try {
  app = getApp('app')
} catch (e) {
  app = initializeApp(firebaseConfig, 'app')
}
const firebaseApp = initializeApp(firebaseConfig, 'app')

export const auth = getAuth(app)

export const store = getFirestore(app)
export default firebaseApp
