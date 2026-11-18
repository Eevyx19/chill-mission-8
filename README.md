# CHILL — Movie Streaming Platform

CHILL is a movie streaming web application developed as part of the Frontend Intermediate Bootcamp assignment. This project focuses on building an interactive user interface and implementing API integration to manage movie data.

## Features

- **Authentication Pages** — Login and Register pages.
- **Movie Catalog** — Display a collection of movies and series.
- **Movie Management** — Create, read, update, and delete movie data.
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

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Eevyx19/chill-mission-7.git
```

### 2. Navigate to the project directory

```bash
cd chill-mission-7
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

---

**Developed as part of the Frontend Intermediate Bootcamp assignment.**