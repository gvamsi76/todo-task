# Todo App with Productivity Timer

This is a web application that combines a Todo list with a Pomodoro-style productivity timer. It allows users to manage their tasks and work in focused sessions with regular breaks.

## Features

1. **User Login Simulation**
   - Fetch and list users from the `/users` endpoint
   - Allow users to select a name to "log in" (no password required)
   - Store the selected user in the application's state

2. **Todo Management**
   - Fetch todos from the `/todos` endpoint where the `userId` matches the logged-in user
   - Display todos with title and completion status

3. **Productivity Timer**
   - Implement a timer for focused work sessions lasting 15 seconds
   - After a work session, prompt the user to take a 5-second break
   - Suggest a longer break of 10 seconds after every 2 work sessions

4. **Styling and Layout**
   - Create a user-friendly and intuitive UI
   - Ensure the app is responsive on both desktop and mobile devices

5. **Filtering and Editing**
   - Added the filters to view all, completed, or incomplete todos

### Enhanced Features

- **Timer Controls**: Start, pause, and reset the timer. Maintain timer state during navigation.
- **Session Tracking**: Keep count of completed work sessions.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/todo-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:3000`
5. want to see in the live 🔥 `https://todo-task1.vercel.app/`

## Deployment
- Vecel
-

## Technologies Used

- React
- React Router
- React Boostrap
- Boostrap
- React Icons
- Axios (HTTP client library)
- CSS ( CSS-in-JS solution like styled-components)

## API Endpoints

The application uses the following API endpoints:

- `/users`: Fetches a list of users
- `/todos`: Fetches todos for a specific user

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).