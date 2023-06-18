import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes/Router';
import {
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </ThemeProvider>

)
