# HireMe - Smart India Hackathon 2024 (LPU, Jalandhar, Punjab)


## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)



## Installation

To get started with the HireMe project, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python (v3.8 or higher)
- pip
- Virtualenv

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/hireme.git
   cd hireme/backend
   ```

2. Create a virtual environment and activate it:

   ```sh
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

3. Install the required Python packages:

   ```sh
   pip install -r requirements.txt
   ```

4. Set up the database:

   ```sh
   python manage.py migrate
   ```

5. Create a superuser to access the Django admin panel:

   ```sh
   python manage.py createsuperuser
   ```

6. Run the development server:

   ```sh
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```sh
   cd ../frontend
   ```

2. Install the required npm packages:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

## Usage

### Accessing the Application

- The backend server will be running at `http://127.0.0.1:8000/`.
- The frontend server will be running at `http://localhost:5173/`.

### Admin Panel

- Access the Django admin panel at `http://127.0.0.1:8000/admin/` using the superuser credentials created during setup.

### User Registration and Login

- Navigate to the registration page at `http://localhost:5173/register` to create a new account.
- Navigate to the login page at `http://localhost:5173/login` to log in to your account.

## Contributing

We welcome contributions to the HireMe project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
