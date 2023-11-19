import React, { ReactNode } from 'react';

interface HomeProps {
    children: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
    return (
        <div>
            <title>Accueil</title>
            <h1>Page d'accueil</h1>
            {children}
        </div>
    );
};

export default Home;