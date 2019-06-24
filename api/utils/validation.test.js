import { emailIsValid, passwordIsValid, pwValidator } from './validation'

const BAD_PASSWORD = 'jesus'
const GOOD_PASSWORD = 'q+*F-W76(fyy2<<GZjb%'
const ANOTHER_PASSWORD = 'luismiddleton'

const GOOD_EMAIL = 'luis@gmail.com'
const BAD_EMAIL = 'luis@luis@luis.com'


test(`Should pass validation with good password - ${GOOD_PASSWORD}`, () => {
    expect(pwValidator.validate(GOOD_PASSWORD)).toBeTruthy()
})

test(`Should fail validation with bad password - ${BAD_PASSWORD}`, () => {
    expect(pwValidator.validate(BAD_PASSWORD)).toBeFalsy()
})

test(`Should pass validation with good email address - ${GOOD_EMAIL}`, () => {
    expect(emailIsValid(GOOD_EMAIL)).toBeTruthy()
})

test(`Should fail validation with bad email address - ${BAD_EMAIL}`, () => {
    expect(emailIsValid(BAD_EMAIL)).toBeFalsy()
})