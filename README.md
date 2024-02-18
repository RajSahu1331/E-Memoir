# E-Memoir Project Readme

## Overview

Welcome to the E-Memoir project! This is a full-stack web application built using JavaScript, Node.js, Express.js, MongoDB, and React.js. The primary purpose of E-Memoir is to provide users with a platform to create, delete, and maintain their personal diaries. Additionally, the application includes functionality to serve as a To-Do List.

## Features

- **Diary Management:** Users can create and maintain their personal diaries, making entries and deleting them as needed.

- **RESTful APIs:** Several efficient RESTful APIs have been developed to facilitate the smooth flow of user data and diary entries between the client and server.

- **Authentication:** JWT (JSON Web Tokens) is used for secure authentication, ensuring that only authorized users can access and manage their diaries.

- **State Management:** Context provider is employed for state management on the front-end, enhancing the user experience by efficiently handling the application's state.

- **To-Do List Functionality:** In addition to diary management, users can utilize the application as a To-Do List, helping them stay organized and productive.

## Technologies Used

- **JavaScript:** The primary programming language for both front-end and back-end development.

- **Node.js:** Used on the server side to run JavaScript server applications.

- **Express.js:** A web application framework for Node.js, utilized to build the server-side of the application.

- **MongoDB:** A NoSQL database used for storing user data and diary entries.

- **React.js:** A JavaScript library for building user interfaces, employed for the development of the front-end of the application.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/RajSahu1331/E-Memoir.git
    ```

2. Navigate to the project directory:

    ```bash
    cd E-Memoir
    ```

3. Install dependencies for both the server and the client:

    ```bash
    cd server
    npm install

    cd ../client
    npm install
    ```

4. Create a MongoDB database and update the connection string in the server's `.env` file.

5. Start the server:

    ```bash
    cd ../server
    npm start
    ```

6. Start the client:

    ```bash
    cd ../client
    npm start
    ```

7. Open your web browser and navigate to `http://localhost:3000` to access the E-Memoir application.

## Usage

- Create an account or log in if you already have one.
- Use the application to create, delete, and manage your personal diary entries.
- Explore the To-Do List functionality to stay organized and productive.

## Contributions

Contributions to the project are welcome! If you have suggestions, improvements, or bug fixes, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to reach out with any questions or feedback. Happy journaling! 📖
```
