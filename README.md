# User Authentication App

This is a full-stack user authentication application built with React.js for the frontend and Node.js with Express.js for the backend. The application uses MongoDB for the database and implements JSON Web Tokens (JWT) for authentication and BcryptJS for Password Hasing.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Folder Structure
user-auth-app/<br>
├── backend/<br>
│ ├── config/<br>
│ │ └── db.js<br>
│ ├── models/<br>
│ │ └── User.js<br>
│ ├── routes/<br>
│ │ └── auth.js<br>
│ ├── middleware/<br>
│ │ └── authMiddleware.js<br>
│ ├── .env<br>
│ ├── index.js<br>
│ ├── package.json<br>
│ ├── package-lock.json<br>
├── frontend/<br>
│ ├── src/<br>
│ │ ├── components/<br>
│ │ │ ├── Profile.js<br>
│ │ │ ├── PrivateRoute.js<br>
│ │ │ ├── Login.js<br>
│ │ │ ├── SignUp.js<br>
│ │ │ ├── PublicRoute.js<br>
│ │ │ ├── EditProfile.js<br>
│ │ ├── context/<br>
│ │ │ └── AuthContext.js<br>
│ │ ├── App.js<br>
│ │ ├── index.css<br>
│ │ ├── index.js<br>
│ ├── public/<br>
│ │ └── index.html<br>
│ ├── package.json<br>
│ ├── package-lock.json<br>
│ ├── postcss.config.js<br>
│ ├── .prettierrc<br>
│ ├── .env<br>
│ ├── tailwind.config.js<br>
├── README.md<br>
