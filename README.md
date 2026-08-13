# Spin Down Leaderboards

Spin Down Leaderboards is a web application for browsing, searching, and viewing competitive leaderboards.

Users can browse available leaderboards, search for specific leaderboards, and open a leaderboard detail page to view its description, formats, banner image, and player rankings.

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
http://localhost:3000
```

Open the local URL provided by Vite.


## Time Spent
Approximately 3–4 hours. I focused on the core leaderboard experience, including search, leaderboard details, rankings, and responsive UI.

## Assumptions and Scope
- The existing API provides the required leaderboard data.
- Search is handled through the API.
- Leaderboards are accessed using their slug.
- Authentication and leaderboard management are outside the scope.
- Pagination was not implemented due to the time limit.

## Stack
- Frontend: React, TypeScript, React Router, Tailwind CSS
- Backend: Existing API
- Database: Existing backend/database

## What I Built
A responsive leaderboard application where users can:
- Search leaderboards
- View leaderboard details
- View formats, league, and scoring information
- View player rankings and Elo ratings
- Navigate between leaderboard pages

Loading, empty, and error states are also included.

## Notable Decisions
- Used API-based search rather than client-side filtering, with search terms passed to the backend API
- Used React state instead of adding a global state library.
- Used Tailwind CSS for simple, consistent styling.
- Added responsive layouts for different screen sizes.

## Testing
Manually tested:
- Search
- Enter-key search
- Leaderboard navigation
- Ranking display
- Responsive layout

No automated tests were added within the time box.

## What I'd Do With More Time
- Add pagination for large leaderboards
- Add automated tests
- Improve loading and error states
- Add ranking filters and sorting
- Further improve accessibility and mobile UX
