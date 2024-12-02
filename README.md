# Dynamic Form Project

## Project Description

This project demonstrates the implementation of a **Dynamic Form** where users can add or remove input fields dynamically. The form is used to collect First Name and Last Name data, with the option to add multiple sets of fields. It also includes basic validation to ensure all fields are filled out before submission.

### Features:
- Add dynamic input fields for First Name and Last Name.
- Remove input fields (with a limitation of at least one field).
- Form validation to ensure all fields are filled before submission.
- Clear form data with a "Clear" button.
- Submit form data and log it to the console.

## Demo

To view the live demo of this project, please refer to [Link to Demo].

## Installation

1. Clone this repository:
    ```bash
    git clone <repository-link>
    ```

2. Navigate into the project directory:
    ```bash
    cd <project-directory>
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the project:
    ```bash
    npm start
    ```

5. Open `http://localhost:3000` in your browser to view the project.

## Usage

1. When the page loads, the form starts with one set of input fields for **First Name** and **Last Name**.
2. You can add additional fields by clicking the **Add** button.
3. The **Remove** button can be used to delete a set of input fields. It will be disabled when only one set of fields remains.
4. After filling out the fields, you can submit the form by clicking the **Submit** button. Validation will check if all fields are filled. If not, an alert will prompt the user to fill the missing fields.
5. You can clear all form fields using the **Clear** button.


## Technologies Used
- React
- React Icons (for trash icon)
- Tailwind CSS for styling
- JavaScript

# Vercel

https://dynamic-form-five-henna.vercel.app/
