import React, { useState } from 'react';
import './App.css';
import { NavigationProvider, useNavigation } from './NavigationContext.js';
import Presentation from './pages/Presentation/Presentation.js'



function App() {
    const [page, setPage] = useState('acceuil');
    return (
        <NavigationProvider> {/* Enveloppe l'application avec le NavigationProvider ici */}
            <div>
                {page === 'presentation' && <Presentation setPage={setPage} />}
                <Presentation />
            </div>
        </NavigationProvider>
    );
}