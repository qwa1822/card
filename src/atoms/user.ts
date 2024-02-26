import { atom } from 'recoil'
import { User } from './userType'

export const userAtom = atom<User | null>({
  key: 'auth/User',
  default: null,
})
