/* Validate .js -- The lamest customizable text validator */

/* charWrapper ... if a char is entered it returns the charcode vice versa with charcode. */
function charWrapper(val) {
    var newVal;

    if (typeof(val) == typeof(0)) {
        newVal = String.fromCharCode(val);
    }

    if (typeof(val) == typeof("")) {
        newVal = val.charCodeAt(0);
    }

    return newVal;
}

/* generateChars ... from two characters generate an array of characters from start to end. */
function generateChars(start, end) {
    newStart = charWrapper(start);
    newEnd = charWrapper(end);

    characters = [];

    for (newStart; newStart <= newEnd; ++newStart) {
        characters.push(charWrapper(newStart));
    }

    return characters
}

/* createValidator ... returns a validator object of the customized type. */
function createValidator(config) {
    /** Characters ... the characters that are allowed in the text.
        Options ... "alpha", "Alpha", "ALPHA", lower-case, mixed-case, upper-case, respectively.
        "numeric", all numbers 0 -> 9, "special", all special characters. Separate each with hyphen.
    */

    characters = config.characters;

    var allowedCharacters = [];

    characters.split("-").forEach(function(option) {
        switch(option) {
            case "alpha":
                allowedCharacters.push(generateChars("a", "z"));
                break;
            case "Alpha":
                allowedCharacters.push(generateChars("A", "z"));
                break;
            case "ALPHA":
                allowedCharacters.push(generateChars("A", "Z"));
                break;
            case "numeric":
                allowedCharacters.push(generateChars("1", "9"));
                break;
            case "special":
                allowedCharacters.push(generateChars("!", "/"));
                allowedCharacters.push(generateChars(":", "@"));
                allowedCharacters.push(generateChars("[", "`"));
                allowedCharacters.push(generateChars("{", "~"));
                break;
        }
    });

    this.allowedCharacters = [].concat.apply([], allowedCharacters);

    this.minLength = config.minLength;
    this.maxLength = config.maxLength;

    this.mustHave = config.mustHave;
    var mustContain = [];

    switch(config.mustContain) {
        case "special":
            mustContain.push(generateChars("!", "/"));
            mustContain.push(generateChars(":", "@"));
            mustContain.push(generateChars("[", "`"));
            mustContain.push(generateChars("{", "~"));
            break;
    }

    this.mustContain = [].concat.apply([], mustContain);

    this.banned = config.banned;
    this.bannedContain = config.bannedContain;

    this.validate = function(toValidate) {
        if (typeof(toValidate) == typeof([])) {

        } else {

        }
    }

    return this;
}

/* Example */
var allowed = {
    characters: "Alpha-numeric-special",

    minLength: 4,
    maxLength: 16,

    mustHave: 2,
    mustContain: "special", /* Text must contain mustHave number of special characters  */

    banned: ["password", "password123"], /* Cannot be these exact phrases */
    bannedContain: ["password*", "*1234", "*pizza*"] /* Cannot contain these phrases, use wildcard to include anything after or before. */
}

passwordValidator = createValidator(allowed);

passwords = ["password123", "manpizzaboy", "CorrectHorseBatteryStaple$!"]

passwordValidator.validate("password123");
passwordValidator.validate(passwords);
