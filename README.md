
# CHILL — Movie Streaming Platform

CHILL is a movie streaming web application developed as part of the Frontend Intermediate Bootcamp assignment. This project focuses on building an interactive user interface, integrating REST APIs, and managing global application state using Zustand.

## Features

- **Authentication Pages** — Login and Register pages.
- **Movie Catalog** — Display a collection of movies and series.
- **Movie Management** — Create, read, update, and delete movie data through API integration.
- **Global State Management** — Manage movie data and API operations using Zustand.
- **Image Upload** — Upload movie posters and backdrop images using Cloudinary.
- **Responsive Design** — Adaptable layout for different screen sizes.
- **Movie Categories** — Organize movies into different sections based on their categories.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router
- Zustand
- MockAPI
- Cloudinary

## State Management

This project uses Zustand to manage movie data as a global application state.

The movie store is responsible for:

- **Fetch Movies** — Retrieve movie data from the API and store it globally.
- **Add Movie** — Create a new movie and update the global movie state.
- **Edit Movie** — Update existing movie data and synchronize the changes with the global state.
- **Delete Movie** — Remove a movie from the API and update the global state.

Axios handles HTTP requests and communication with the API, while Zustand manages the movie data and makes it accessible across different components.

A separate Zustand store is also used to manage modal visibility.

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Eevyx19/chill-mission-8.git
```

### 2. Navigate to the project directory

```bash
cd chill-mission-8
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory and configure the following variables:

```env
VITE_CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
VITE_CLOUDINARY_UPLOAD_PRESET=YOUR_PRESET_NAME
VITE_API_URL_IMAGE=YOUR_CLOUDINARY_API_IMAGE
VITE_MOVIE_API_URL=YOUR_MOVIE_API
```

Replace the placeholder values with your own Cloudinary and MockAPI configurations.

### 5. Run the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Application Routes

| Route | Description |
|---|---|
| `/login` | Login page |
| `/register` | Registration page |
| `/` | Main application page |

## Learning Objectives

Through this project, I practiced:

- Integrating REST APIs using Axios.
- Managing global application state using Zustand.
- Handling asynchronous API operations.
- Implementing CRUD functionality.
- Separating API services, state management, and UI logic.
- Uploading and managing images using Cloudinary.
- Building reusable components with React and TypeScript.

---

**Developed as part of the Frontend Intermediate Bootcamp assignment.**
