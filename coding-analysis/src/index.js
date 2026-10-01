import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MyProvider } from './components/mycontext/Mycontext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <MyProvider>
        <App />
    </MyProvider>
);
