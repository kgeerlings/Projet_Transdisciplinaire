
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Presentation from './pages/Presentation/Presentation'
import Attendus from './pages/Attendus/Attendus';
import Gestion from './pages/Gestion/Gestion';
import Developpement from './pages/Developpement/Developpement';
import Etude from './pages/Etude/Etude';
import Jeu from './pages/Jeu/Jeu';

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Presentation />}></Route>
                <Route path="/Presentation" element={<Presentation />}> </Route>
                <Route path="/Attendus" element={<Attendus />}> </Route>
                <Route path="/Gestion" element={<Gestion />}> </Route>
                <Route path="/Developpement" element={<Developpement />}> </Route>
                <Route path="/Etude" element={<Etude />}> </Route>
                <Route path="/Jeu" element={<Jeu />}> </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);