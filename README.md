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

### Backend Folder Structure

- **models/**: Contains Mongoose models.
  - `User.js`: User model schema definition.
- **routes/**: Contains Express route definitions.
  - `authRoutes.js`: Routes for authentication (register, login, profile).
- **middleware/**: Contains middleware functions.
  - `authMiddleware.js`: Middleware to protect routes.
- **config/**: Contains configuration files.
  - `db.js`: MongoDB connection configuration.
- **.env**: Environment variables file.
- **server.js**: Main entry point for the backend server.

### Frontend Folder Structure

- **src/**: Contains the source code for the frontend.
  - **components/**: Contains React components.
    - `Profile.js`: Protected profile component.
    - `PrivateRoute.js`: Component that protects the children from unauthorized users.
    - `PublicRoute.js`: Component that protects the login and register pages from logged users.
    - `Login.js`: Login form component.
    - `SignUp.js`: Registration form component.
    - `EditProfile.js`: Component that allows users to edit their profile details and delete it.
  - **context/**: Contains context providers for global state management.
    - `AuthContext.js`: Context for authentication state.
  - `App.js`: Main App component containing routes.
  - `index.js`: Entry point for the React application.
- **public/**: Contains static files.
  - `index.html`: Main HTML file for the React application.
- **package.json**: Lists frontend dependencies and scripts.
- **tailwind.config.json**: Configuration file for Tailwind CSS.


## Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Backend Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/iNeatz/Profile-System.git
   cd backend
2. Install Backend Dependencies:

   ```sh
   npm install
