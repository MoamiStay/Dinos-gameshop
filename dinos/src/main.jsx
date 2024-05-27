import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from "./Styles/GlobalStyles.jsx";
import Theme from "./Styles/Theme.jsx";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>,
)
