import SigninForm from 'components/signin/Form'
import { FormInterface } from 'components/signup/Form'
import { useAlertContext } from 'contexts/AlertContext'
import { auth } from 'firebase'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
export default function SignInPage() {
  const { open } = useAlertContext()
  const navigate = useNavigate()
  const handleSubmit = useCallback(
    async (formValues: FormInterface) => {
      const { email, password } = formValues

      try {
        const response = await signInWithEmailAndPassword(auth, email, password)

        navigate('/')
      } catch (e) {
        // Firebase에러
        if (e instanceof FirebaseError) {
          if (e.code === 'auth/wrong-password') {
            open({
              title: '게정의 정보를 다시 확인해주세요',
              onButtonClick: () => {},
            })
          }
        }

        // 일반적인 에러
        open({
          title: '잠시 후 다시 시도해주세요',
          onButtonClick: () => {},
        })
      }
    },
    [open],
  )

  return <SigninForm onSubmit={handleSubmit} />
}
