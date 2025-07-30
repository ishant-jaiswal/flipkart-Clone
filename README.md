# E-commerce Clone Project

This is a full-stack e-commerce clone project consisting of a React frontend and a Node.js/Express backend.

## Project Structure

- `client/`: React frontend application
- `server/`: Node.js backend API server

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- Git installed for version control

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ishant-jaiswal/flipkart-Clone.git
   cd flipkart-Clone
   ```

2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```

## Running the Project

### Start the backend server

From the `server` directory:
```bash
npm start
```

### Start the frontend client

From the `client` directory:
```bash
npm start
```

The React app will typically run on `http://localhost:3000` and the backend server on `http://localhost:5000` (or as configured).

## Pushing to GitHub

To push your project to GitHub:

1. Initialize git (if not already done):
   ```bash
   git init
   ```

2. Add all files and commit:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. Add remote repository:
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   ```

4. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Notes

- The `server` folder was previously a git submodule but is now included as part of the main repository.
- Make sure to configure environment variables as needed for the backend server.

## License

This project is open source and available under the MIT License.
