import {
  createContext,
  useContext,
  useMemo,
  ComponentProps,
  useState,
  useCallback,
} from 'react'

import { createPortal } from 'react-dom'

import Alert from 'components/shared/Alert'

type AlertProps = ComponentProps<typeof Alert>
type AlertOptions = Omit<AlertProps, 'open'>

interface ALertContextValue {
  open: (options: AlertOptions) => void
}

const Context = createContext<ALertContextValue | undefined>(undefined)

const defaultValues: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
}
export function AlertContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [alertState, setAlertyState] = useState(defaultValues)

  const $portal_root = document.getElementById('root-portal')

  const open = useCallback(({ onButtonClick, ...options }: AlertOptions) => {
    setAlertyState({
      ...options,
      open: true,
      onButtonClick: () => {
        close()
        onButtonClick()
      },
    })
  }, [])

  const values = useMemo(() => {
    return { open }
  }, [open])
  const close = useCallback(() => {
    setAlertyState(defaultValues)
  }, [])
  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
      <Alert {...alertState} />
    </Context.Provider>
  )
}

export function useAlertContext() {
  const values = useContext(Context)

  if (values === null) {
    throw new Error('AlertContext 내부에서 사용해주세요!')
  }

  return values
}
