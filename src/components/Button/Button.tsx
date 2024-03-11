import React from 'react';

interface Props {
  message: string;
}

const Button: React.FC<Props> = ({ message }) => {
  return <button>{message}</button>;
};

export default Button;