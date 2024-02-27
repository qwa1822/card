import BasicInfo from 'components/apply/BasicInfo'
import CardInfo from 'components/apply/CardInfo'
import Terms from 'components/apply/Terms'
import { ApplyValues } from 'constants/apply'
import React, { useState } from 'react'

export default function ApplyPage() {
  const [step, setStep] = useState(1)

  const handleTermsChange = (terms: ApplyValues['terms']) => {
    console.log(terms)
  }

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {}
  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo onNext={handleBasicInfoChange} /> : null}
      {step === 2 ? <CardInfo /> : null}
    </div>
  )
}