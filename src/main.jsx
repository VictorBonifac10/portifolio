import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/index.jsx';
import { ThemeProvider } from "next-themes";

import { ThemeBridge } from "./styles/ThemeBridge";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <ThemeBridge>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeBridge>
    </ThemeProvider>
  </StrictMode>
);
