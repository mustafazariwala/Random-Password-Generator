# Random-Password-Generator

## Challenge Description

For this project, it was required to build a functional random password generator using JavaScript. The goal of the generator is to prompt the user a series of criterias they would prefer to have in their password (criteria include lowercase/uppercase letters, numbers and special characters). If all prompts are correctly selected a password would display based on the user's prompt selections. The app runs in the brower and features updated HTML and CSS powered by JavaScript and is responsive to multiple screen sizes. 


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## The Result
To satify this criteria, the site uses HTML/CSS/JavaScript structural semantics to reflect the following:
* A generate button, when clicked, will ask the user to confirm the size of the password required (must be between 8 and 128 characters)
* A series of questions, prompting the user to choose criterias to include in their password including:
    * Whether user wants lowercase letters
    * User wwants uppercase letters
    * User wants a numeric
    * User wants a special character
* Depending on the chosen criteria and the chosen length of the password, the generator will randomly choose characters based on the user's selections and will display the password in the 'Password Textbox'

## Image of Deployed Site
![Alt text](Assets/Functional%20Site.png)

## Link to Site