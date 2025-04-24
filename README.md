# Meta-Morph Portfolio

A modern, interactive portfolio website built with React and Tailwind CSS, featuring a dynamic metaverse experience and AI-powered chatbot.

## Features

- **Interactive Metaverse**: Dynamic 3D particle system with mouse interaction
- **AI Chatbot**: Intelligent assistant that can answer questions about projects and experience
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Detailed display of projects with interactive demos
- **Experience Timeline**: Visual representation of work experience
- **Skills Visualization**: Interactive display of technical skills
- **Education & Awards**: Comprehensive display of academic achievements

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- React Router
- Canvas API
- JavaScript ES6+

## How It Was Built

This portfolio was built using a modern tech stack and follows best practices for web development:

1. **Frontend Framework**: React.js for building the user interface
2. **Styling**: Tailwind CSS for utility-first styling
3. **Animations**: Framer Motion for smooth, interactive animations
4. **Routing**: React Router for navigation between different sections
5. **Interactive Elements**: 
   - Canvas API for the metaverse background
   - Custom AI chatbot implementation
   - Responsive design for all device sizes

The project follows a component-based architecture, with each section of the portfolio implemented as a separate component. The AI chatbot uses a combination of predefined responses and dynamic content generation based on user queries.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/sukethrp/meta-morph-portfolio.git
```

2. Install dependencies:
```bash
cd meta-morph-portfolio
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Run the Project

### Development Mode

To run the project in development mode:

```bash
npm start
```

This will start the development server with hot reloading enabled, allowing you to see changes in real-time.

### Production Build

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder that you can deploy to any static hosting service.

### Testing

To run tests:

```bash
npm test
```

## Project Structure

```
meta-morph-portfolio/
├── src/
│   ├── components/         # Reusable components
│   │   ├── AIChat.jsx     # AI chatbot component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Layout.jsx     # Layout wrapper
│   │   ├── Metaverse.jsx  # Interactive background
│   │   └── Navbar.jsx     # Navigation bar
│   ├── pages/             # Page components
│   │   ├── About.jsx      # About page
│   │   ├── Awards.jsx     # Awards page
│   │   ├── Education.jsx  # Education page
│   │   ├── Experiences.jsx # Experiences page
│   │   ├── Home.jsx       # Home page
│   │   ├── Projects.jsx   # Projects page
│   │   └── Skills.jsx     # Skills page
│   ├── assets/            # Static assets
│   ├── styles/            # Global styles
│   └── App.jsx            # Main application component
├── public/                # Public assets
└── package.json           # Project dependencies
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Suketh Reddy Produtoor - [LinkedIn](https://www.linkedin.com/in/suketh-reddy-produtoor/)

Project Link: [https://github.com/sukethrp/meta-morph-portfolio](https://github.com/sukethrp/meta-morph-portfolio)
