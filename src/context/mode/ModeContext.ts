import { createContext } from 'react';

export type TModeContext = {
  isEditMode: boolean;
  toggleEditMode: () => boolean;
};

export const ModeContext = createContext<TModeContext>({
  isEditMode: false,
  toggleEditMode: () => true,
});
