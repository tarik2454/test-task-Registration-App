import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './src/App.jsx';

import './src/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
