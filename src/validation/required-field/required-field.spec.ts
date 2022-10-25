
import { faker } from '@faker-js/faker'
import { RequiredFieldValidation } from '@/validation/required-field/required-field'

describe('RequiredFieldValidation', () => {
  test('should return false if field is empty', () => {
    const sut = new RequiredFieldValidation('search')
    const isValid = sut.validate('')
    expect(isValid).toBeFalsy()
  })

  test('should return true if field is not empty', () => {
    const sut = new RequiredFieldValidation('search')
    const isValid = sut.validate(faker.random.word())
    expect(isValid).toBeTruthy()
  })
})
