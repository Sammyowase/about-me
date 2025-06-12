# VigoPlace Assignment

A simple Express.js backend application built with TypeScript.

## Overview

This project is a minimal Express.js API that provides basic information about the developer. It's built using TypeScript and follows modern Node.js development practices.

## Technologies Used

- Node.js
- Express.js (v5.1.0)
- TypeScript (v5.8.3)
- dotenv for environment variable management

## Project Structure

```
vigoplace_assignment/
├── index.ts          # Main application entry point
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
├── .env              # Environment variables (not tracked in git)
├── dist/             # Compiled JavaScript output (not tracked in git)
└── node_modules/     # Dependencies (not tracked in git)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher, as required by Express v5)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   ```

### Running the Application

Development:
```
npm run build
npm start
```

## API Endpoints

- `GET /about-me` - Returns basic information about the developer

## Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm start` - Runs the compiled application