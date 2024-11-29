# Project Structure

```.gitignore
backend/
    .env
    config/
        db.js
        passport.js
    logs/
    middleware/
        logger.js
    models/
        User.js
    package.json
    routes/
        auth.js
    server.js
frontend/
    .gitignore
    eslint.config.js
    index.html
    package.json
    postcss.config.js
    public/
    README.md
    src/
        api/
            authApi.js
            axiosInstance.js
        App.css
        App.jsx
        assets/
        components/
            Authentication/
        index.css
        main.jsx
        Pages/
            HomePage.jsx
            LoginPage.jsx
            RegisterPage.jsx
    tailwind.config.js
    vite.config.js
stories.md
```

## Backend

Configuration
 - Database Configuration: The database connection is configured in ```db.js``` using Mongoose to connect to MongoDB.
- Passport Configuration: Passport strategies for local and Google OAuth authentication are configured in ```passport.js```.

Models
- User Model: The user schema is defined in User.js using Mongoose.
Routes
- Authentication Routes: The authentication routes are defined in auth.js. These routes handle user registration, login, logout, and Google OAuth.

Server
- Server Setup: The server is set up in server.js. It uses Express, Passport, and MongoDB for session management and authentication.

## Frontend

Configuration
- Vite Configuration: The Vite configuration is defined in vite.config.js.
- Tailwind CSS Configuration: Tailwind CSS is configured in tailwind.config.js.
- PostCSS Configuration: PostCSS is configured in postcss.config.js.
- ESLint Configuration: ESLint is configured in eslint.config.js.

API
- Axios Instance: The Axios instance is configured in axiosInstance.js to communicate with the backend.
- Auth API: The authentication API functions are defined in authApi.js.

Pages
- Home Page: The home page is defined in HomePage.jsx.
- Login Page: The login page is defined in LoginPage.jsx.
- Register Page: The register page is defined in RegisterPage.jsx.

Main Application
- App Component: The main application component is defined in App.jsx.
- Main Entry Point: The main entry point is defined in main.jsx.

## Backend Installation

1. Navigate to the backend directory.
2. Install dependencies:
```
npm install
```
3. Create a .env file with the following environment variables:
```
MONGO_URI=<your_mongo_uri>
SESSION_SECRET=<your_session_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
```

4. Start the server:
```
npm run dev
```

API Endpoints
- POST /auth/register: Register a new user.
- POST /auth/login: Login with email and password.
- GET /auth/google: Initiate Google OAuth login.
- GET /auth/google/callback: Google OAuth callback.
- GET /auth/logout: Logout the user.

## Frontend Installation

1. Navigate to the  ```frontend``` directory.

2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```

## Authentication Flow
- Registration: Users can register by providing their name, email, phone, and password.
- Login: Users can log in using their email and password or via Google OAuth.
- Session Management: Sessions are managed using cookies and stored in MongoDB.
- Protected Routes: Protected routes require authentication and are accessible only to logged-in users.
