import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import Button from '@/components/common/atoms/Button';

export default {
  title: 'common/atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BIDgQ7Eq9LV09c5vDxXxhw/Rooftop-Design-Library?node-id=1478%3A297',
    },
  },
  args: {
    label: 'Button',
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    handleClick: { action: 'button clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Buttons = () => <Wrapper> </Wrapper>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 450px;
`;

const Row = styled.div`
  ${({ theme }) => theme.flexRowSet('flex-start', 'flex-end')};
  gap: 1rem;
`;
