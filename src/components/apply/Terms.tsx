import { Agreement } from 'components/shared/Agreement'
import FixedBottomButton from 'components/shared/FixedBottomButton'
import { ApplyValues, 약관목록 } from 'constants/apply'
import ApplyPage from 'pages/Apply'
import React, { MouseEvent, useCallback, useState } from 'react'

export default function Terms({
  onNext,
}: {
  onNext: (terms: ApplyValues['terms']) => void
}) {
  const [termsAgreements, setTermsAgrement] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  const 모든약관이_동의되었는가 = Object.values(termsAgreements).every(
    (동의여부) => 동의여부,
  )

  const handleAllAgreement = useCallback(
    (e: MouseEvent<HTMLElement>, checked: boolean) => {
      console.log('checked', checked)

      setTermsAgrement((prevTemrs) => {
        return Object.keys(prevTemrs).reduce(
          (prev, cur) => ({
            ...prev,
            [cur]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  console.log(handleAllAgreement)

  return (
    <div>
      <Agreement>
        <Agreement.Title
          checked={모든약관이_동의되었는가}
          onChange={handleAllAgreement}
        >
          약관에 모두동의
        </Agreement.Title>
        {약관목록.map(({ id, link, title }) => (
          <Agreement.Description
            key={id}
            link={link}
            checked={termsAgreements[id]}
            onChange={(_, checked) => {
              setTermsAgrement((prev) => ({
                ...prev,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관동의"
        disabled={모든약관이_동의되었는가 === false}
        onClick={() => {
          onNext(Object.keys(termsAgreements))
        }}
      />
    </div>
  )
}
