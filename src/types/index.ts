export type PasswordCriteriaType = {
    id: number | string,
    desc: PasswordCriteriaStrings,
    isSatisfied: boolean
}

export enum PasswordCriteriaStrings {
  C1 = 'Have at least one uppercase letter',
  C2 = 'Have at least one lowercase letter',
  C3 = 'Have at least one number',
  C4 = 'Have at least one special character (!@#$...etc)',
  C5 = 'Longer than 8 characters'
}