# DevStack

DevStack is a clean React application for exploring modern development technologies and building a personal tech stack. Users can browse tools from different categories, add their favorite technologies to a stack, and remove them when they change their mind.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

## Features

- Browse technology cards with icons, categories, difficulty levels, ratings, badges, and short descriptions.
- Add technologies to a personal stack with a success toast notification.
- Manage the selected stack by removing one technology at a time or clearing the full stack.

## Project Highlights

- Responsive navbar with mobile menu support.
- Hero section with a clear call to explore technologies.
- Empty stack message with a dotted border when no technology is selected.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes component UI easier to read, write, and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a React component. In this project, it is used in `App.tsx` to store the selected technologies and in `Navbar.tsx` to open or close the mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects like fetching data, updating the page title, or working with browser APIs. This project currently loads the JSON data with `fetch`, React `use()`, and `Suspense`, so `useEffect` was not needed here. If the data was loaded inside a component after render, `useEffect` would be the right place to fetch the JSON file.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which list item changed, was added, or was removed. This makes list rendering faster and prevents UI update problems.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, `YourStack.tsx` shows `Your stack is empty` when no technology is selected, and shows selected technology cards when the stack has items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send data back by calling a function that the parent passed as a prop. In this project, `App.tsx` passes `selectedTechnologies` and `setSelectedTechnologies` to child components so they can read and update the stack.
