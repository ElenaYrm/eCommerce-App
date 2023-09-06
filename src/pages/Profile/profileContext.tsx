import { ReactElement, ReactNode, createContext, useContext, useState } from 'react';

type EditContextType = boolean;
type UpdateEditModeType = (value?: boolean) => void;

const EditContext = createContext<EditContextType | undefined>(undefined);
const EditUpdateContext = createContext<UpdateEditModeType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useIsEditMode(): EditContextType {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error('useIsEditMode must be used within an EditingProvider');
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUpdateEditMode(): UpdateEditModeType {
  const context = useContext(EditUpdateContext);
  if (context === undefined) {
    throw new Error('useUpdateEditMode must be used within an EditingProvider');
  }
  return context;
}

interface EditingProviderProps {
  children: ReactNode;
}

export function EditingProvider({ children }: EditingProviderProps): ReactElement {
  const [isEditMode, setEditMode] = useState(false);

  function updateEditMode(value?: EditContextType): void {
    if (value !== undefined) {
      setEditMode(value);
    } else {
      setEditMode((prevEditMode) => !prevEditMode);
    }
  }

  return (
    <EditContext.Provider value={isEditMode}>
      <EditUpdateContext.Provider value={updateEditMode}>{children}</EditUpdateContext.Provider>
    </EditContext.Provider>
  );
}
