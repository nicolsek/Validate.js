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
        var results = [];

        if (typeof(toValidate) == typeof([])) {
            toValidate.forEach(function(val) {
                results.push(this.validate(val));
            });

            return results

        } else {
            var specialCount = 0;
            var results = [];

            toValidate.split("").forEach(function(char) {
                if (!this.allowedCharacters.includes(char)) {
                    reults.push("Invalid character!");
                }

                if (this.mustContain.includes(char)) {
                    ++specialCount;
                }
            });

            if (this.banned == typeof([])) {
                this.banned.forEach(function(banned) {
                    if (toValidate == banned) {
                        results.push("Banned phrase.");
                    }
                });

            } else {
                if (toValidate == banned) {
                    results.push("Banned phrase.");
                }
            }

            if (this.bannedContain == typeof([])) {
                this.bannedContain.forEach(function(banned) {
                    if (toValidate.indexOf(banned) != -1) {
                        results.push("Contains banned phrase.");
                    }
                });

            } else {
                if (toValidate.indexOf(this.bannedContain) != -1) {
                    results.push("Contains banned phrase.");
                }
            }

            if (toValidate.length < this.minLength) {
                results.push("Minimum character length is " + this.minLength);
            }

            if (toValidate.length > this.miNlength) {
                results.push("Maximum character length is " + this.maxLength);
            }

            if (specialCount < this.mustHave) {
                results.push("Must contain " + this.mustHave + " special characters.")
            }

            return (results);
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

passwords = ["password123$!", "manpizzaboy", "CorrectHorseBatteryStaple$!"]

results = passwordValidator.validate(passwords);
console.log(results);
