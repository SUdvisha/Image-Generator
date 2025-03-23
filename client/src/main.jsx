
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import './index.css'
import App from './App.jsx'
import "tailwindcss";
import 'bootstrap/dist/css/bootstrap.css';
createRoot(document.getElementById('root')).render(
<BrowserRouter> 
<AppContextProvider> 
    <App />
    </AppContextProvider>   
</BrowserRouter>
  
)
