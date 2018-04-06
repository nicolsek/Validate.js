/* Validate .js -- The lamest customizable text validator */

/* createValidator ... returns a validator object of the customized type. */
function createValidator(name, allowed) {
}

/* Example */
var allowed = {
    characters: "alphanumeric-special",

    minLength: 4,
    maxLength: 16,

    mustHave = 2,
    mustContain = "special", /* Text must contain mustHave number of special characters  */

    banned = ["password", "password123"], /* Cannot be these exact phrases */
    bannedContain = ["password*", "*1234", "*pizza*"] /* Cannot contain these phrases, use wildcard to include anything after or before.
}

passwordValidator = createValidator(allowed);

passwords = ["password123", "manpizzaboy", "CorrectHorseBatteryStaple$!"]

passwordValidator.validate("password123");
passwordValidator.validate(passwords);
