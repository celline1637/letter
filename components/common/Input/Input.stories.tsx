import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useCallback } from 'react';

import Input from './Input';
import { useInput } from './useInput';

export default {
  title: 'common/atoms/Input',
  component: Input,
  parameters: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...rest }) => {
  const validator = useCallback((value: string) => {
    if (value.length < 1) return '최소 한 글자 이상 입력해주세요';
  }, []);

  return <Input {...rest} validator={validator} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '제목',
  placeholder: '최소 한 글자 이상 입력하세요',
};
