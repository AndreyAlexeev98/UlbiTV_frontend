import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import '@/app/styles/index.scss'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'
import withMock from 'storybook-addon-mock'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'Ulbi',
    city: '113',
    currency: Currency.RUB,
    avatar:
      'https://www.azcentral.com/gcdn/-mm-/fd5c5b5393c72a785789f0cd5bd20acedd2d2804/c=0-350-2659-1850/local/-/media/Phoenix/BillGoodykoontz/2014/04/24//1398388295000-Homer-Simpson.jpg?width=2659&height=1500&fit=crop&format=pjpg&auto=webp',
  },
}
Primary.decorators = [StyleDecorator({ maxWidth: 800 })]

export const withError = Template.bind({})
withError.args = {
  error: 'true',
}
withError.decorators = [StyleDecorator()]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
Loading.decorators = [StyleDecorator()]
