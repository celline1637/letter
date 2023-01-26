import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import BottomSheet from './BottomSheet';

export default {
  title: 'common/molecules/BottomSheet',
  component: BottomSheet,
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = (args) => {
  return (
    <Wrapper>
      <BottomSheet {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '타이틀입니다',
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
