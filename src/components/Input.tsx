import React, { useCallback, useEffect, useRef, useState } from 'react';

import { registerDebounce } from '../utils';

interface InputProps {
  onSearch: Function;
}

const SEARCH_TIMEOUT = 500;

const Input: React.FC<InputProps> = ({ onSearch }) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus();
  }, [inputRef]);

  const debounce = useCallback(registerDebounce(onSearch, SEARCH_TIMEOUT), []);

  useEffect(() => {
    value && debounce(value);
  }, [value]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input ref={inputRef} type="text" onChange={handleChange}/>
  );
};

export { Input };
