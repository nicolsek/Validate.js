# Validate.js 

The lamest customizable text validator. Built with ease of use and capability in mind.

## Getting Started

`git clone https://github.com/nicolsek/Validate.js`
`cd Validate.js/`

### Usage 

Include the script.
```html 
<!-- APPLICATION CODE -->
<script src="validate.min.js">
<!-- APPLICATION CODE --> 
```

Create the config for the validator.
```js
var config = {
    characters: "Alpha-numeric-special", // The allowed characters to check for validation.
    
    minLength: 4, // The minimum length of text(s) to be validated.
    maxLength: 16, //The maximum length of text(s) to be validated.

    musthave: 2, // The amount of types of special characters it must have.
    mustContain: "special",  // The kind of characters it must contain, for now only special is valid.

    banned: ["Password", "password", "password123"], // The banned string(s) that aren't valid text inputs.
    bannedContain: "password", // Cannot contain these value(s).
}

var validator = createValidator(validator); // Returns the validator object.

validator.validate("CorrectHorseBatteryStaple123$@"); // Returns that it exceeds the max length.
validator.validate("SpookyBooky$!2"); // Returns empty array as it's fine.
```

## Documentation

Customizable options.

### Characters
`characters: `, the characters that are allowed within the string to be validated. The options for characters are combined with hyphen (-) as concatination.

* alpha, all lower case letters from a - z are acceptable.
* Alpha, all mixed case letters from A - z are acceptable.
* ALPHA, all upper case letters from A - Z are acceptable.
* numeric, all number 0 - 9 are acceptable.
* special, all special characters are acceptable.

Passed as string, example: characters: "alpha-numeric";

### Length 
* `minLength: `, minimum length of the string to be validated, passed as int.
* `maxLength: `, maximum length of the string to be validated, passed as int.

### Special Characters
* `mustHave: `, the amount of special characters it must contain, passed as int.
* `mustContain: `, the type of special characters it must contain, only "special" is valid, passed as string.

### Banned or Illegal Inputs
* `banned: `, the exact phrases that are banned, passed as an array of strings or one string.
* `bannedContain: `, the phrases the text cannot contain, passed as an array of strings or one string.

## Built With

* [JavaScript](https://www.javascript.com/) - The language it was built in.

## Authors

* **Nicole Tusek** [Nicolsek](https://github.com/Nicolsek)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Stack Overflow for research on array concatination.
