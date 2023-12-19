import { ComponentMeta, ComponentStory } from '@storybook/react'
import Badge from './index'

export default {
  title: 'atoms/Badge',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { sumary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'バッジの色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Badge>

const Templatte: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Orange = Templatte.bind({})
Orange.args = { content: 'I', backgroundColor: '#ed9f28' }

export const Green = Templatte.bind({})
Green.args = { content: '2', backgroundColor: '#32bf00' }

export const Red = Templatte.bind({})
Red.args = { content: '10', backgroundColor: '#d4001a' }
