import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  title: 'GauthButton',
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { text: 'Sign in', rounded: 'lg', theme: 'default' },
}

export const White: Story = {
  args: { text: 'Sign in', rounded: 'lg', theme: 'white' },
}

export const Outline: Story = {
  args: { text: 'Sign in', rounded: 'lg', theme: 'outline' },
}
