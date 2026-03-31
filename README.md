<div id="top">
<div align="center">

# WISECODE

*Transform Ideas into Impactful Solutions Instantly*

![last-commit](https://img.shields.io/github/last-commit/kashyapchirag/WiseCode?style=flat&logo=git&logoColor=white&color=0080ff)
![repo-top-language](https://img.shields.io/github/languages/top/kashyapchirag/WiseCode?style=flat&color=0080ff)
![repo-language-count](https://img.shields.io/github/languages/count/kashyapchirag/WiseCode?style=flat&color=0080ff)

*Built with the tools and technologies:*

![Express](https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white)
![.ENV](https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black)
<br>
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618.svg?style=flat&logo=Radix-UI&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=flat&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
  - [Seeding Problems](#seeding-problems)

---

## Overview

WiseCode is a full-stack DSA practice platform built for developers who want to sharpen their problem-solving skills. It provides a focused coding environment with a curated problem set, a multi-language in-browser code editor, real-time Judge0 execution, and progress tracking — all wrapped in a clean, minimal interface.

**Why WiseCode?**

This project delivers a complete, self-hostable coding challenge environment. The core features include:

- 🧩 **Component-Based Architecture:** Modular React frontend with reusable UI components and a clean Express/MongoDB backend.
- ⚡ **Real-Time Code Execution:** Run and submit code across Java, Python, C++, and JavaScript — powered by [Judge0](https://judge0.com/).
- 🔒 **JWT Authentication:** Secure sign-up, sign-in, and optional auth flows with token-based sessions.
- 📊 **Progress Tracking:** Tracks solved problems per user with completion percentage and per-language accepted code history.
- 🎨 **Polished UI:** Resizable split-pane editor, multiple CodeMirror themes, dark/light mode, and smooth animated transitions via Framer Motion.
- 📚 **15 Curated Problems:** Ranging from Basic to Hard across Arrays, Trees, Graphs, DP, Sliding Window, Backtracking, and more.

---

## Demo

https://github.com/user-attachments/assets/c1040589-311f-429a-b51c-945a0d6205e8

---

## Features

| Feature | Description |
|---|---|
| Multi-language Editor | Code in Java, C++, Python, or JavaScript with syntax highlighting |
| Judge0 Integration | Real test case execution with time & memory stats |
| Resizable Panels | Split-pane layout — problem description, editor, and results |
| Theme Support | Switch between Tokyo Night, Dracula, Nord, GitHub Light, and more |
| Auth System | Sign up / sign in with JWT; optional auth for browsing |
| Difficulty Filter | Filter problems by Basic, Easy, Medium, or Hard |
| Solved Tracking | Green checkmarks and completion percentage for logged-in users |
| Starter Code | Pre-filled boilerplate for all languages on every problem |

---

## Project Structure

```
WiseCode/
├── client/                  # React + Vite frontend
│   └── src/
│       ├── api/             # Axios instance & problem API calls
│       ├── components/
│       │   ├── editor/      # CodeEditor with CodeMirror
│       │   ├── landing/     # Hero, Features, CTA, Footer, Navbar
│       │   ├── modals/      # EditorSettingsModal
│       │   ├── panels/      # TestCasePanel, SubmitPanel
│       │   ├── problemset/  # ProblemFilter, ProblemTable, ProblemRow, Navbar
│       │   └── ui/          # Shadcn/Radix UI primitives + custom components
│       ├── layouts/         # MainLayout
│       └── pages/           # LandingPage, AuthPage, ProblemSet, ProblemDetail
│
└── server/                  # Express + MongoDB backend
    ├── config/              # DB connection
    ├── controllers/         # authController, problemController
    ├── middleware/          # authMiddleware (protect, optionalAuth)
    ├── models/              # User, Problem, Submission schemas
    ├── routes/              # authRoutes, problemRoutes
    └── seed/                # seedProblems.js — 15 seeded problems
```

---

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm**
- **MongoDB** (local or [Atlas](https://www.mongodb.com/atlas))
- A running **Judge0** instance (self-hosted or via [RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce))

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/kashyapchirag/WiseCode
cd WiseCode
```

2. **Install client dependencies:**

```sh
cd client
npm install
```

3. **Install server dependencies:**

```sh
cd ../server
npm install
```

### Environment Variables

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JUDGE0_URL=your_judge0_submissions_endpoint
PORT=5000
```

Create a `.env.development` file inside `client/`:

```env
VITE_API_URL=http://localhost:5000
```

### Usage

**Start the backend:**

```sh
cd server
npm run dev
```

**Start the frontend:**

```sh
cd client
npm run dev
```

The app will be available at `http://localhost:5173`.

### Seeding Problems

To populate the database with the 15 built-in problems:

```sh
cd server
node seed/seedProblems.js
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
