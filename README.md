# Spin Down Leaderboards

Spin Down Leaderboards is a web application for browsing, searching, and viewing competitive leaderboards.

Users can browse available leaderboards, search for specific leaderboards, and open a leaderboard detail page to view its description, formats, banner image, and player rankings.

## Features

* Browse available leaderboards
* Search for leaderboards
* Click a leaderboard card to view its details
* View leaderboard descriptions
* View supported leaderboard formats
* View leaderboard banner images
* View player rankings
* Responsive layout for desktop and mobile devices

## Technologies

* React
* TypeScript
* React Router
* Tailwind CSS
* Vite
* npm

## Requirements

Before running the project, make sure you have the following installed:

* Node.js 24.16.0 or newer
* npm

You can check your installed versions with:

```bash
node --version
npm --version
```

## Running the Project Locally

### 1. Clone the repository

Clone the GitHub repository:

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

### 2. Enter the project directory

```bash
cd <YOUR-PROJECT-FOLDER>
```

Replace `<YOUR-PROJECT-FOLDER>` with the name of the cloned repository.

### 3. Install dependencies

Install all required project dependencies:

```bash
npm install
```

### 4. Set up the React frontend

Run the frontend setup command:

```bash
npm run setup:frontend -- react
```

### 5. Start the development server

Start the Vite development server:

```bash
npm run dev
```

Vite will display a local URL in the terminal. The application is usually available at:

```text
http://localhost:5173
```

Open the URL in a web browser to use the application.

## Using the Application

### Browse Leaderboards

The home page displays the available leaderboards as clickable cards.

Click anywhere on a leaderboard card to open its detail page.

### Search Leaderboards

Use the search box to search for a specific leaderboard.

Enter a search term and click the **Search** button to display matching leaderboards.

### View Leaderboard Details

The leaderboard detail page provides information about the selected leaderboard, including:

* Leaderboard title
* Description
* Formats
* Banner image
* Player rankings

## Responsive Design

The application is designed to work on both desktop and mobile screen sizes.

The leaderboard cards automatically adjust their layout based on the available screen width.

## Project Structure

```text
project/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── views/
│   ├── App.tsx
│   ├── router.tsx
│   └── main.tsx
├── tools/
│   └── setup-frontend.mjs
├── package.json
├── README.md
└── vite.config.ts
```
