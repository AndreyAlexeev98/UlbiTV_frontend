
import { useTranslation } from 'react-i18next'
import { Currency } from 'shared/const/common'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Select } from 'shared/ui/Select/Select'
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text"
import { Profile } from "../../model/types/profile"
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?:boolean
  onChangeFirstName?: (value:string) => void
  onChangeLastName?: (value:string) => void
  onChangeAge?: (value:number | string) => void
  onChangeCity?: (value:string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar
}:ProfileCardProps) => {
    
  const {t} = useTranslation('profile')

  if(isLoading){
    return (
      <div className={classNames(cls.profilecard, {[cls.loading]: true}, [className])}>
        <Loader/>
      </div>
    )
  }

  if(error){
    return (
      <div className={classNames(cls.profilecard, {}, [className, cls.error])}>
        <Text title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте перезагрузить страницу")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods:Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.profilecard, mods, [className])}>
      <div className={cls.data}>
        {
          data?.avatar &&  <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt="avatar img" />
          </div>
        }
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstName}/>

        <Input
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastName}
        />

        <Input
          value={Number(data?.age)|| 0}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />

        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <Select
          label={"Укажите валюту"}
          options={[
            {value: Currency.RUB, content: Currency.RUB},
            {value: Currency.EUR, content: Currency.EUR},
            {value: Currency.USD, content: Currency.USD}
          ]}
        />
      </div>
    </div>
  )
}
