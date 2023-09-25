import { ReactElement, ReactNode, useState } from 'react';
import { ModeContext, TModeContext } from './ModeContext';

interface ModeProviderProps {
  children: ReactNode;
}

export function ModeProvider({ children }: ModeProviderProps): ReactElement {
  const [isEditMode, setEditMode] = useState(false);

  const newMode: TModeContext = {
    isEditMode: isEditMode,
    toggleEditMode: () => {
      setEditMode(!isEditMode);
      return isEditMode;
    },
  };

  return <ModeContext.Provider value={newMode}>{children}</ModeContext.Provider>;
}
