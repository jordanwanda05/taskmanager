# Task Management App

A simple full-stack task management application using **React, Node.js, Express, and MongoDB**.

## Features

- Add, view, update, and delete tasks
- Responsive UI built with React and Tailwind CSS
- REST API backend using Express and MongoDB

## Technologies Used

### Frontend

- React
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- MongoDB (Mongoose)
- CORS
- Dotenv

## Installation

### Prerequisites

- Node.js installed
- MongoDB Atlas or local MongoDB setup

### Setup Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend:
   ```bash
   node server.js
   ```

### Setup Frontend

1. Navigate to frontend:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## Deployment

- **Backend**: Deploy using **Render, Railway, or Heroku**
- **Frontend**: Deploy using **Vercel or Netlify**

## Future Improvements

- User authentication
- Task categories and priorities
- Dark mode UI

## Contributing

Feel free to fork and submit pull requests to enhance this project.

## License

MIT License

