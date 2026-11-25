import React, { createContext, useContext } from 'react';
import type { Professor } from '../../types/pedagogical';

/**
 * Who is using the teacher area. Auditors see every screen but can't change
 * anything; the database rules enforce the same (is_teacher()).
 */
const ProfessorContext = createContext<Professor | null>(null);

export const ProfessorProvider = ProfessorContext.Provider;

export function useProfessor(): Professor | null {
  return useContext(ProfessorContext);
}

export function useCanEdit(): boolean {
  return useContext(ProfessorContext)?.role === 'teacher';
}

/** Shows its children only to professors who can edit. */
export const EditOnly: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  useCanEdit() ? <>{children}</> : null;

/** Disables every field and button inside for read-only professors. */
export const ReadOnlyFields: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <fieldset disabled={!useCanEdit()} className="contents">
    {children}
  </fieldset>
);
