import { RequiredFieldValidation } from './required-field'

describe('RequiredFieldValidation', () => {
  test('should return false if field is empty', () => {
    const sut = new RequiredFieldValidation('search')
    const isValid = sut.validate('')
    expect(isValid).toBeFalsy()
  })
})
