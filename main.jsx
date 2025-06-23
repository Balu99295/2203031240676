// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// /* === File: src/App.jsx === */
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ShortenerPage from './pages/ShortenerPage';
// import StatsPage from './pages/StatsPage';
// import Redirector from './pages/Redirector';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<ShortenerPage />} />
//         <Route path="/stats" element={<StatsPage />} />
//         <Route path="/:shortcode" element={<Redirector />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
