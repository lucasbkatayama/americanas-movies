import { Validation } from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  isCorrect: boolean
  fieldName: string
  fieldValue: string

  validate (fieldName: string, fieldValue: string): boolean {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.isCorrect
  }
}
