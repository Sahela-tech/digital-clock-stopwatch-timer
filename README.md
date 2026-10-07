# ⏱️ Digital Clock, Stopwatch & Timer (Modular Architecture)

A modern, responsive, and modular web application providing a Real-Time Clock, Stopwatch with millisecond precision, and a Countdown Timer. Built using pure Vanilla JavaScript, CSS, and HTML with a clean modular directory structure.

---

## 🌟 Overview

The **Digital Clock, Stopwatch & Timer** application is structured with a clean separation of concerns, separating core functional modules (`clock`, `stopwatch`, `timer`) from the main view and entry point. Designed with a sleek **Glassmorphism UI**, it brings three time-tracking tools into a single interface.

1. 🕒 **Live Digital Clock:** Real-time 12-hour clock (with AM/PM) and date tracking.
2. ⏱️ **Precision Stopwatch:** High-accuracy timer with millisecond resolution.
3. ⏳ **Countdown Timer:** Configurable hours, minutes, and seconds with automated alert feedback.

---

## ✨ Features

- 🧩 **Modular Code Architecture:** Independent components for Clock, Stopwatch, and Timer for better maintainability and scalability.
- 💎 **Glassmorphism UI:** Modern frosted-glass aesthetic using dynamic backdrop filters and vibrant typography (`Orbitron` & `Poppins`).
- ⚡ **Zero External Dependencies:** Built with pure HTML5, CSS3, and Vanilla JavaScript (ES6+).
- 📱 **Fully Responsive:** Smooth layout execution across all desktop and mobile devices.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic document structure (`public/index.html`).
- **CSS3:** Custom styles, modular component CSS, Flexbox, and Glassmorphism effects.
- **JavaScript (ES6+):** Event handling, modular functions, native `Date` API, and time intervals.
- **Python:** Automation script for project structure generation.

---

## 📂 Project Structure

```text
digital-clock-stopwatch-timer/
├── public/
│   └── index.html         # Main Application HTML View
├── modules/
│   ├── clock/
│   │   ├── clock.js       # Real-Time Clock Logic
│   │   └── clock.css      # Clock Specific Styling
│   ├── stopwatch/
│   │   ├── stopwatch.js   # Precision Stopwatch Logic
│   │   └── stopwatch.css  # Stopwatch Specific Styling
│   └── timer/
│       ├── timer.js       # Countdown Timer Logic
│       └── timer.css      # Timer Specific Styling
└── app.js                 # App Entry Point & Tab Controller

```

---

## 🚀 How to Run

1. Download or Clone this repository.
2. **Launch Application:**
Navigate into the `src/` directory and again navigate to `views/` the open `index.html` in any web browser.

---
