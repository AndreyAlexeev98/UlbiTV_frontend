import { BugButton } from 'app/providers/ErrorBoundary'
import { memo, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Input } from 'shared/ui/Input/Input'
import { Page } from 'widgets/Page/Page'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')
  return (
    <Page>
      <BugButton />
      <Input value={value} onChange={setValue} placeholder={'Введите текст'} />
      <div>{t('Главная страница')}</div>
    </Page>
  )
})
export default MainPage
