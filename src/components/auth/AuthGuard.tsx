import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'
import { auth } from 'firebase'
import { userAtom } from 'atoms/user'
import { User } from 'atoms/userType'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)
  const setUser = useSetRecoilState<User | null>(userAtom)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser({
          uid: user.uid,
          email: user.email ?? '',
          displayName: user.displayName ?? '',
        })
      } else {
        setUser(null)
      }
      setInitialize(true)
    })

    // 컴포넌트가 unmount될 때 unsubscribe 함수를 호출하여 메모리 누수를 방지합니다.
    return () => unsubscribe()
  }, []) // [] 안에 값이 비어 있으므로, 컴포넌트가 mount될 때와 unmount될 때에만 useEffect가 실행됩니다.

  if (!initialize) {
    return <div>인증처리중...로딩중...</div>
  }

  return <>{children}</>
}
