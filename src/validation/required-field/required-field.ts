import { Validation } from '@/presentation/protocols/validation'

export class RequiredFieldValidation implements Validation {
  validate (value: string): boolean {
    return !!value
  }
}
