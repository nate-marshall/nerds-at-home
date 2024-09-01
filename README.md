
# Nerds at Home

Welcome to **Nerds at Home**! This project is a web application built using React, TypeScript, and Node.js, inspired by the [Titan](https://themewagon.github.io/titan/index_landing.html) template. It serves as a landing page designed to support my YouTube channel, TechN8, where I help beginners get started with home labs, home automation, platform, DevOps, and more. This project serves as a playground to experiment with various tech concepts while providing a modern, tech-themed interface.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: The webpage is fully responsive and works well on all device sizes.
- **Modular Components**: The site is built using modular React components for easy maintenance and scalability.
- **Static Assets**: Images and other static assets are managed within the `src/assets/images` directory.
- **Simple Navigation**: Easy-to-use navigation bar with links to different sections of the page.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/nerds-at-home.git
    cd nerds-at-home
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```
   This will start the React development server on `http://localhost:3000`.

## Usage

After starting the development server, open your browser and navigate to `http://localhost:3000` to view the Nerds at Home webpage.

### Building for Production

To create an optimized build of the application for production, run:

```bash
npm run build
```

This command creates a `build` directory with all the static files needed for deployment.

## Project Structure

```
nerds-at-home/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── your-image.jpg
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Node.js**: JavaScript runtime environment used for development and backend services.
- **Bootstrap**: CSS framework for responsive design.
- **React-Bootstrap**: Bootstrap components built with React.
- **Webpack**: Module bundler used under the hood by Create React App.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
