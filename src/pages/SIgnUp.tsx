import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Form, { FormInterface } from 'components/signup/Form'

import { collection, doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { auth, store } from 'firebase'
import { COLLECTIONS } from 'constants'

export default function SignUpPage() {
  const handleSubmit = async (formValues: FormInterface) => {
    const { email, password, name } = formValues

    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, {
      displayName: name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    }

    // 문서ID지정
    // user컬렉션 추가  user.uid저장  데이터는 newUser
    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    // Todo : 로그인 처리
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}
