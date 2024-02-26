import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebase'
// 인증처리
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)
  // if(인증처리가안도ㅒㅆ어){
  //   return null
  // }

  // 한번거쳤다왔다? 인증처리가 됐다
  onAuthStateChanged(auth, (user) => {
    setInitialize(true)
  })

  // 아직 거치지않았다
  if (initialize === false) {
    return <div>인증처리중...로딩중...</div>
  }

  return <>{children}</>
}
