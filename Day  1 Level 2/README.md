# GradientSPA 🌈

A modern, responsive React Single Page Application featuring beautiful gradient designs, smooth animations, and comprehensive state management. Built with React Router, Context API, and custom AOS-style animations.

![React](https://img.shields.io/badge/React-18.x-blue.svg)
![React Router](https://img.shields.io/badge/React%20Router-6.x-red.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)
![Lucide React](https://img.shields.io/badge/Lucide%20React-Icons-orange.svg)

## ✨ Features

### 🎨 Design & UI
- **Gradient Themes**: Beautiful dark and light gradient themes
- **Responsive Design**: Perfectly optimized for all screen sizes (mobile to 4K)
- **Modern Aesthetics**: Contemporary design with glassmorphism effects
- **Smooth Animations**: Custom AOS-style scroll animations and transitions
- **Interactive Elements**: Hover effects and micro-interactions

### 🛠 Technical Features
- **React Router**: Multi-page navigation with SPA experience
- **Context API**: Global state management for theme, user data, and notifications
- **Custom Hooks**: Reusable animation and state management hooks
- **TypeScript Ready**: Clean, maintainable code structure
- **Performance Optimized**: Fast loading and smooth interactions

### 📱 Pages & Components
- **Home Page**: Hero section with stats and user dashboard preview
- **Profile Page**: Editable user profile with activity stats
- **Projects Page**: Project management with progress tracking
- **Contact Page**: Contact form and information
- **Settings Page**: Application preferences and configurations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gradient-spa.git
   cd gradient-spa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react react-dom react-router-dom lucide-react
   # or
   yarn add react react-dom react-router-dom lucide-react
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 📦 Dependencies

### Core Dependencies
- **React**: ^18.0.0 - UI library
- **React DOM**: ^18.0.0 - DOM rendering
- **React Router DOM**: ^6.0.0 - Client-side routing
- **Lucide React**: ^0.263.1 - Beautiful icons

### Styling
- **Tailwind CSS**: ^3.0.0 - Utility-first CSS framework

### Dev Dependencies
- **@types/react**: TypeScript definitions
- **@types/react-dom**: TypeScript definitions

## 🏗 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Main navigation component
│   ├── HomePage.jsx           # Home page component
│   ├── ProfilePage.jsx        # Profile management
│   ├── ProjectsPage.jsx       # Projects dashboard
│   ├── ContactPage.jsx        # Contact form
│   └── SettingsPage.jsx       # Settings panel
├── context/
│   └── AppContext.jsx         # Global state management
├── hooks/
│   └── useAOS.js             # Animation on scroll hook
├── styles/
│   └── index.css             # Global styles and Tailwind imports
├── App.jsx                    # Main app component
└── index.js                   # Entry point
```

## 🔧 Configuration

### Tailwind CSS Setup

1. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure `tailwind.config.js`**
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {
         animation: {
           'gradient-x': 'gradient-x 15s ease infinite',
           'gradient-y': 'gradient-y 15s ease infinite',
         },
         keyframes: {
           'gradient-x': {
             '0%, 100%': {
               'background-size': '200% 200%',
               'background-position': 'left center'
             },
             '50%': {
               'background-size': '200% 200%',
               'background-position': 'right center'
             },
           },
         },
       },
     },
     plugins: [],
   }
   ```

3. **Add Tailwind directives to `src/index.css`**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   /* Custom AOS animations */
   [data-aos] {
     opacity: 0;
     transform: translateY(20px);
     transition: opacity 0.6s ease, transform 0.6s ease;
   }

   [data-aos].aos-animate {
     opacity: 1;
     transform: translateY(0);
   }
   ```

## 🎯 Key Components

### AppProvider (Context)
Manages global application state including:
- Theme switching (dark/light)
- User profile data
- Notifications system
- Projects management

### Navigation Component
- Responsive navigation bar
- Mobile-friendly hamburger menu
- Active route highlighting
- Theme toggle button

### Custom useAOS Hook
- Intersection Observer API implementation
- Smooth scroll animations
- Performance optimized

## 🎨 Theming

The application supports two beautiful themes:

### Dark Theme
- Deep gradient backgrounds (purple, violet, pink)
- Glass morphism effects
- High contrast text
- Neon accent colors

### Light Theme
- Soft pastel gradients (blue, purple, pink)
- Clean white overlays
- Readable dark text
- Subtle shadows

## 🔄 State Management

### Global State (Context API)
```javascript
const contextValue = {
  theme: 'dark' | 'light',
  toggleTheme: () => void,
  user: UserObject,
  setUser: (user) => void,
  notifications: NotificationArray,
  markNotificationRead: (id) => void,
  projects: ProjectArray,
  updateProject: (id, updates) => void
}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Enhanced layouts for medium screens
- **Desktop**: Full-featured desktop experience
- **4K**: High-resolution display support

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚀 Performance Features

- **Lazy Loading**: Components load on demand
- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Efficient Re-renders**: Context optimization to prevent unnecessary renders
- **Responsive Images**: Optimized for different screen sizes

## 🔧 Customization

### Adding New Pages
1. Create component in appropriate directory
2. Add route to main App component
3. Update navigation menu
4. Add context state if needed

### Modifying Themes
1. Update gradient classes in components
2. Add new color combinations to Tailwind config
3. Test contrast ratios for accessibility

### Adding Animations
1. Use the custom `useAOS` hook
2. Add `data-aos` attributes to elements
3. Customize animation delays with `data-aos-delay`

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**
   - Ensure `useAOS` hook is called in components
   - Check that elements have `data-aos` attributes

2. **Routing issues**
   - Verify React Router setup
   - Check for correct import statements

3. **Styling problems**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS rules

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Zain Ul Abdin Ghani**
- Email: zain.ghani@example.com


## 🙏 Acknowledgments

- [React Team](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [React Router](https://reactrouter.com/) for client-side routing

---

⭐ **Star this repository if you found it helpful!**