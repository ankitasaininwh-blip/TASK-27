# TASK-27 - React Router DOM

## Project Overview

This project is built using React.js and Vite. It fetches photo data from the JSONPlaceholder API and displays the photos in a responsive grid layout.

## Features

- Fetches photos from an external API.
- Displays photo images and titles.
- Shows a loading message while fetching data.
- Handles API errors.
- Uses a custom `useFetch` hook for API requests.
- Responsive design for desktop and mobile devices.
- Uses React Router DOM with BrowserRouter.

## Technologies Used

- React.js
- React Router DOM
- Vite
- JavaScript
- CSS
- Fetch API
- JSONPlaceholder API

## Project Structure

```text
TASK-27/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── useFetch.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd TASK-27
```

Install dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

`http://localhost:5173/`

## Build for Production

```bash
npm run build
```





## Deployment

This project is configured for deployment on GitHub Pages using GitHub Actions.

After pushing changes to the `main` branch, the workflow builds the project and deploys the generated `dist` folder.





## Author

Ankita
