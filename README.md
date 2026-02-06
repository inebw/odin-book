# Odin Book

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_App-3b82f6?style=for-the-badge)](https://odin-book-ten.vercel.app/)
[![Frontend Code](https://img.shields.io/badge/Code-Frontend_Repo-black?style=for-the-badge)](https://github.com/inebw/odin-book)
[![Backend Code](https://img.shields.io/badge/Code-Backend_Repo-black?style=for-the-badge)](https://github.com/inebw/odin-book-api)

## 📖 About The Project

Odin Book is a comprehensive social media platform built as a capstone project for **The Odin Project** curriculum. It replicates core features of platforms like Facebook, focusing on a complex relational data structure and real-time user interaction.

The goal of this project was to master **React architecture**, **real-time WebSocket integration**, and **responsive UI patterns** without relying on component libraries.

## ⚡ Tech Stack

| Domain        | Technologies                        |
| :------------ | :---------------------------------- |
| **Frontend**  | React (Vite), JavaScript (ES6+)     |
| **Styling**   | Tailwind CSS (Custom Design System) |
| **Routing**   | React Router v6 (Nested Routes)     |
| **Real-Time** | Socket.io Client                    |
| **State**     | Context API + Custom Hooks          |
| **Utils**     | Date-fns, Prop-Types                |

## 🚀 Key Features

### 🟢 Real-Time Communication

- **Live Messaging:** Instant 1-on-1 chat implementation powered by Socket.io.
- **Presence System:** Real-time "Online/Offline" status indicators in the user interface.
- **Instant Feedback:** Likes, comments, and follows update immediately across connected clients.

### 🤝 Social Graph & Interaction

- **Polymorphic Interactions:** Users can Like and Dislike both **Posts** and **Comments**.
- **Nested Discussions:** Recursive comment threads with reply functionality.
- **Follow System:** Complex many-to-many relationship management (Followers/Following) with optimistic UI updates.

### 🎨 UI/UX & Architecture

- **Persistent Theming:** A robust Dark/Light mode toggle that respects user preference and local storage.
- **Skeleton Loading:** Custom-built skeleton components (e.g., `ChatLiveSkeleton`, `FullPostSkeleton`) to eliminate Cumulative Layout Shift (CLS) during data fetching.
- **Responsive Layout:** A mobile-first design featuring a collapsible sidebar navigation and adaptive grids.

## 👨‍💻 Technical Highlights

### 1. Separation of Concerns (Custom Hooks)

To keep components clean and strictly focused on the View layer, logic was extracted into reusable hooks located in `src/utils`.

- `useGetAuthUser`: Centralizes authentication persistence and session validation.
- `useGetLiveChat`: Encapsulates Socket event listeners for incoming messages.
- `useGetComments`: Manages the independent fetching and state of comment threads.

### 2. Component Composition

The Chat interface demonstrates strict component composition to manage re-renders:

- `Chat`: Manages the high-level layout.
- `Connections`: Handles the list of available friends.
- `ChatBoard`: The active container.
- `ChatLive`: The distinct message history stream (preventing input typing from re-rendering the list).

### 3. Smart Routing

Utilization of React Router's **Nested Routes** (`<Outlet />`) allows for efficient layouts where the Sidebar and Header remain static while the main content area transitions between Feed, Profile, and Chat views.

---
