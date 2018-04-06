/* Validate .js -- The lamest customizable text validator */

/* charWrapper ... if a char is entered it returns the charcode vice versa with charcode. */
function charWrapper(val) {
    var newVal;
    
    if (typeof(val) == int) 
        newVal = String.fromCharCode(val); 
    } else {
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
        characters.append(charWrapper(newStart));
    }
}

/* createValidator ... returns a validator object of the customized type. */
function createValidator(name, allowed) {
    /** Characters ... the characters that are allowed in the text. 
        Options ... "alpha", "Alpha", "ALPHA", lower-case, mixed-case, upper-case, respectively.
        "numeric", all numbers 0 -> 9, "special", all special characters. Separate each with hyphen.
    */ 

    characters.split("-").forEach(function(option) {
        switch(option) {
            case "alpha":
            case "Alpha":
            case "ALPHA":
            
            case "numeric":
            case "special":
        }
    });
}

/* Example */
var allowed = {
    characters: "Alpha-numeric-special",

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
