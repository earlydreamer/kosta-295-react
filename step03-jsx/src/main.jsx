import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jsx_test from './JSX_test.jsx';

createRoot(document.getElementById('root')).render(
  //<StrictMode> //StrictMode는 개발 모드에서만 활성화됩니다.
    <Jsx_test/>
  //</StrictMode>,
)
