import passwordValidator from 'password-validator'
import emailValidator from 'email-validator'

// Create a schema
const schema = new passwordValidator();

// Add properties to it
export const pwValidator = schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().symbols()                                // Must have symbols                 
    .has().not().spaces()                           // Should not have spaces

// validate emails
export function emailIsValid(email) {
    return emailValidator.validate(email)
}

// validate password by schema
export function passwordIsValid(password) {
    return pwValidator.validator(password)
}

