import { Validation } from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  isCorrect: boolean
  fieldValue: string

  validate (fieldValue: string): boolean {
    this.fieldValue = fieldValue
    return this.isCorrect
  }
}
