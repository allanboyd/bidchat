# Social Media Auction Platform

A modern React-based auction platform with social media integration, built with Vite, TypeScript, and Tailwind CSS.

## Features

- **Multi-Theme Support** - 5 color themes (Emerald, Blue, Purple, Red, Orange)
- **Instagram Integration** - Feed sharing with DM simulator
- **WhatsApp Integration** - Chat simulator for customer support
- **Mobile-First Design** - Responsive layout with mobile app preview
- **Interactive Chat Simulators** - Realistic UI for social media interactions
- **Auction Management** - Rules, settings, and lot management

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **clsx** for conditional class names

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── types.ts              # TypeScript interfaces
├── AuctionPlatform.tsx   # Main component with all views
├── App.tsx              # Entry point
├── index.css            # Tailwind CSS imports
└── App.css              # Custom styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Rules & Settings
- Auction rules configuration
- Settlement and fees information
- Status indicators for different features

### Instagram Channel
- Product feed display
- Share to DM functionality
- Story sharing capability
- Interactive DM simulator

### Core Mobile App
- Mobile-first design
- Tab navigation (Home, Auctions, Wallet, Profile)
- Featured lots display
- Wallet management interface

### WhatsApp Integration
- Chat simulator for customer support
- Product sharing via WhatsApp
- Interactive messaging interface

## Sample Data

The platform includes sample auction lots:
- Vintage Rolex Submariner
- Antique Persian Rug
- Modern Art Painting

Each lot includes pricing, images, and bidding information.