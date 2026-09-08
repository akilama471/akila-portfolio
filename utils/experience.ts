/**
 * Utility for dynamic years of experience calculation.
 * The starter year is configured via NEXT_PUBLIC_EXPERIENCE_START_YEAR in environment variables.
 * Defaults to 2019 if not defined.
 */
export const CAREER_START_YEAR = Number(process.env.NEXT_PUBLIC_EXPERIENCE_START_YEAR) || 2019;

export function getYearsOfExperience(): number {
    const currentYear = new Date().getFullYear();
    const years = currentYear - CAREER_START_YEAR;
    return Math.max(1, years);
}
