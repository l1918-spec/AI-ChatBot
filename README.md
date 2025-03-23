# AI-ChatBot  

This project is built using **React** and **Vite**, ensuring fast performance and a seamless development experience with HMR (Hot Module Replacement) and ESLint integration.  

## Features  

- **React + Vite**: Optimized setup for fast builds and development.  
- **ESLint Rules**: Pre-configured linting for better code quality.  
- **Fast Refresh**: Instant updates in development mode.  

## Plugins Used  

This project supports two official Vite plugins for React:  

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.  

## Expanding ESLint Configuration  

For production applications, we recommend:  

- Using **TypeScript** for type safety.  
- Enabling type-aware linting rules with [`typescript-eslint`](https://typescript-eslint.io).  

You can check out the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript into your project.  

## Getting Started  

1. **Install dependencies**:  
   ```sh
   npm install
   ```  
2. **Start the development server**:  
   ```sh
   npm run dev
   ```  
3. **Build for production**:  
   ```sh
   npm run build
   ```  
4. **Preview the build**:  
   ```sh
   npm run preview
   ```  

## License  

This project is licensed under [MIT License](LICENSE).  

