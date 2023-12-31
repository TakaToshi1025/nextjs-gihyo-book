import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from './index'

export default {
  title: 'atoms/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレスホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const Normal = Template.bind({})
export const Error = Template.bind({})
Error.args = { hasError: true }
