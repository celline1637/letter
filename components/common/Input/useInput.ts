import { ChangeEventHandler, useEffect, useState } from 'react';

import useDebounce from 'hooks/useDebounce';

interface useInputProps {
  /** 인풋의 초기값입니다. */
  initialValue?: string;
  /** 입력 값에 대한 유효성 검사에 대한 결과로 error text를 반환합니다. */
  validator?: (value: string) => string | undefined;
}

export const useInput = ({ initialValue = '', validator }: useInputProps) => {
  const [value, setValue] = useState<string>(initialValue);
  const [hasTyped, setHasTyped] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>();
  const debouncedValue = useDebounce(value, 300);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({
    target: { value: newValue },
  }) => {
    setValue(newValue);
    if (!hasTyped) {
      setHasTyped(true);
    }
  };

  useEffect(() => {
    // 입력 전에는 유효성 검사 X
    if (!hasTyped) return;
    // 유효성 검사가 필요한 경우에만 적용
    if (!validator) return;

    const helperText = validator(debouncedValue);
    setHelperText(helperText);
  }, [debouncedValue, hasTyped, validator]);

  return { value, helperText, onChange } as const;
};
