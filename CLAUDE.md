# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nerds at Home is a landing page for the TechN8 YouTube channel, focused on home labs, home automation, and DevOps topics. Built with React, TypeScript, and Bootstrap.

## Commands

- `npm start` - Start development server on http://localhost:3000
- `npm run build` - Create production build in `build/` directory
- `npm test` - Run tests in watch mode
- `npm test -- --watchAll=false` - Run tests once without watch mode

## Architecture

This is a Create React App (react-scripts) project with a simple component structure:

- **App.tsx** - Main component that composes Header, HeroSection, and Footer
- **src/components/** - React functional components (Header, HeroSection, Footer, FeaturesSection, TechN8Section)
- **src/assets/images/** - Static images (.jpg, .webp, .jpeg)
- **src/App.css** - Main styles including hero section, animations, and responsive breakpoints

## Tech Stack

- React 18 with TypeScript
- React-Bootstrap for UI components
- CSS with custom animations (fadeIn keyframes)
- Strict TypeScript config (`strict: true`)
