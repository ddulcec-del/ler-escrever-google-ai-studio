/**
 * The data layer the app uses. This version has no server or database:
 * everything is kept in this browser (localDb.ts).
 */
export * from './localDb';

/** Kept for the screens that show "data stays in this browser" notices. */
export const isDemoMode = true;
