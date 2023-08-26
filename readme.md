# playo-todo-list

This is a simple todo-liat app built with pure JS/HTML/CSS and Express for managing daily tasks.

## Features

- Display to-do list
- Add new tasks
- Delete tasks
  
## Progress
 
Due to the time constraint of only a few hours, the design is not very visually appealing :) but all requested features are fully implemented, and fundamental architecture for a full-featured application is in place. 

What is established:

- A lean server using Node.js and Express, which functions as the backend, complete with API capabilities.
- On the client side, I've implemented the MVC design pattern.
    
### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo:

    ```
    git clone https://github.com/vickiMen/playo-todo-list.git
    ```

2. Install NPM packages in the root directory:

    ```
    npm install
    ```

3. Run the server from the root directory:

    ```
    node index.js

    ```
4. Open the browser and navigate to:
   ```
   http://localhost:3002/
   ```
* The variable PORT can be found in the 'index.js' file, in the root directory.
  

## Project Structure

- `/dist`: The compiled output directory containing the production-ready code.
  - `Controller.js`: Manages the application logic and handles user interactions.
  - `main.js`: The primary JavaScript file that initializes and runs the application.
  - `Renderer.js`: Responsible for rendering and updating the UI elements.
- `/server`: The main directory containing all server-side code and resources.
  - `/data`: Folder dedicated to data management and operations
    - `manager.js`: Manages data operations and interactions in-memory storage.
    - `tasks.js`: Contains the mock data used by the app.
  - `/model/Task.js`: Model definition for a Task (a listing in the todolist), outlining its properties and behaviors.
  - `/routes/api.js`: Contains route definitions and API endpoint handlers.