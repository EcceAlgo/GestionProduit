import React from 'react';

interface MonComposantProps {
    nom: string;
}

const MonComposant: React.FC<MonComposantProps> = ({nom}) => {
    return <div>Bonjour, je m'appelle {nom}.</div>;
}

export default MonComposant;