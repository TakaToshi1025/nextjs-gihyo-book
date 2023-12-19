import { ComponentMeta } from '@storybook/react'
import Button from '@/components/atoms/Button'
import GlobalSpinner from '@/components/organisms/GlobalSpinner/index'
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from '@/contexts/GlobalSpinnerContext'

export default {
  title: 'organisms/GlobalSpinner',
} as ComponentMeta<typeof GlobalSpinner>

export const WithContextProvider = () => {
  const Childcomponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const handleClick = () => {
      setGlobalSpinner(true)
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 5000)
    }

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>スピナー表示</Button>
      </>
    )
  }

  return (
    <GlobalSpinnerContextProvider>
      <Childcomponent />
    </GlobalSpinnerContextProvider>
  )
}
