# User Authentication App

This is a full-stack user authentication application built with React.js for the frontend and Node.js with Express.js for the backend. The application uses MongoDB for the database and implements JSON Web Tokens (JWT) for authentication and BcryptJS for Password Hasing.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Folder Structure
user-auth-app/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── auth.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── .env
│ ├── index.js
│ ├── package.json
│ ├── package-lock.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Profile.js
│ │ │ ├── PrivateRoute.js
│ │ │ ├── Login.js
│ │ │ ├── SignUp.js
│ │ │ ├── PublicRoute.js
│ │ │ ├── EditProfile.js
│ │ ├── context/
│ │ │ └── AuthContext.js
│ │ ├── App.js
│ │ ├── index.css
│ │ ├── index.js
│ ├── public/
│ │ └── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── postcss.config.js
│ ├── .prettierrc
│ ├── .env
│ ├── tailwind.config.js
├── README.md
