Validate.js
===
A customizable validator, used for forms or whatever.

Usage
===
```js

/* Setup the options for the validator */
var config = {
    characters: "Alpha-numeric-special", // The characters that are allowed, alpha is only lower case, Alpha is mixed, ALPHA is all caps, numeric is all numbers, and special is all special.

    minLength: 4, // The minimum length of text(s) to be validated.
    maxLength: 16, // The maximum length of text(s) to be validated.

    mustHave: 2, // How many special characters it must have.
    mustContain: "special", // The kind of characters it must contain, for now only special is valid.

    banned: ["Password", "password", "password123"], // The banned string(s) that should not be valid passwords, can be an array or single string.
    bannedContain: ["password", $("#username").val()], // Cannot contain the value(s). $ assumes you're using a jquery form or whatever.
}

var validator = createValidator(validator); // Returns the validator object.

validator.validate("CorrectHorseBatteryStaple123$@") // Returns true if the value is valid, otherwise returns the reason the value is invalid.
```
