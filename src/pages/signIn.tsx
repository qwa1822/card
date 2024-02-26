import SigninForm, { Formvalues } from 'components/signin/Form'
import { FormInterface } from 'components/signup/Form'
import { useCallback } from 'react'
export default function SignInPage() {
  const handleSubmit = useCallback((formValues: FormInterface) => {}, [])
  return <SigninForm onSubmit={handleSubmit} />
}
