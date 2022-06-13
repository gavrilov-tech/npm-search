import React, { useEffect, useRef, useState } from 'react';

interface InputProps {
  title: string;
  disabled: boolean;
  onSearch: Function;
}

const Input: React.FC<InputProps> = ({ title, disabled, onSearch }) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
   if (!inputRef.current) return
    inputRef.current.focus();
  }, [inputRef]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    onSearch(value);
    setValue('');
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={handleChange}/>
      <button disabled={disabled} onClick={handleClick}>{title}</button>
    </div>
  );
};

export { Input };
