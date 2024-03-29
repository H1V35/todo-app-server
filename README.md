# TODO-App-Server

Backend for TODO App, created with Express.js.

## 📚 Dependencies

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)

## 🧞 Setup

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

1. **Clone this repository:**

   ```bash
   git clone https://github.com/H1V35/todo-app-server.git
   cd todo-app-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Scripts:**

- **start**: `node src/server.js` - To start the server in production mode.

```bash
npm run start
```

- **dev**: `nodemon src/server.js` - To start the server in development mode with automatic restart.

```bash
npm run dev
```

## ✨ Config

### Port

By default, the server runs on port `5005`.

### Database

The server is linked to a MongoDB Atlas database.

## 🏗️ Project Structure

Inside of this project, you'll see the following folders and files:

```markdown
/src
|-- config
| └── index.js
|-- controllers
| └── task.controller.js
|-- db
| └── index.js
|-- models
| └── task.model.js
|-- routes
| └── task.routes.js
|-- services
| └── task.service.js
└── server.js
```

## 🔍 Available Services

- **getTasksService**: Get all tasks.
- **createTaskService**: Create a new task.
- **completeTaskService**: Mark a task as completed.
- **deleteTaskService**: Delete a task by its ID.
- **deleteCompletedTasksService**: Delete all completed tasks.

## 👨‍💻 Endpoints

- `GET /tasks` - Get all tasks.
- `POST /tasks` - Create a new task.
- `POST /tasks/:task_id/complete` - Mark a task as completed.
- `DELETE /tasks/:task_id/delete` - Delete a task by its ID.
- `DELETE /tasks/delete-completed` - Delete all completed tasks.

Enjoy managing your tasks with TODO App. Happy coding! 🚀
