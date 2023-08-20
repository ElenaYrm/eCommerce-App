import { ReactElement } from 'react';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button';
  name: string;
  className?: string;
}

function Button({ type, name, className }: IButtonProps): ReactElement {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  );
}

export default Button;
