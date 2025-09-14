# Penthara Todo App

A simple, modern todo app built with React, Vite, and Tailwind CSS.

## Features
- Add, edit, complete, and delete tasks
- Filter tasks by status (all, completed, pending)
- Persistent storage with localStorage
- Responsive design with light/dark mode toggle

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
- `src/components/` – UI components (TaskForm, TaskList, TaskItem, FilterComponent)
- `src/services/` – Context and logic for managing todos
- `src/utils/ThemeSwitcher.jsx` – Theme toggle logic
- `src/assets/` – Static assets

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- LocalStorage for persistence

## License
MIT
