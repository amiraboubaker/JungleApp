import React, { useState } from 'react'; // Import de React et de useState
import '../style/Footer.css'; // Import des styles CSS du composant Footer depuis le fichier 'Footer.css'

function Footer() { // Déclaration du composant fonctionnel Footer
    const [inputValue, setInputValue] = useState(""); // État pour gérer la valeur de l'input
    const [Nbm, setNumber] = useState(20); // État pour gérer le nombre

    // Fonction pour incrémenter le nombre
    const increment = () => {
        setNumber(Nbm + 1);
    }

    // Fonction pour décrémenter le nombre
    const decrement = () => {
        setNumber(Nbm - 1);
    }

    // Gestionnaire d'événements pour mettre à jour la valeur de l'input
    const handleInput = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    }

    // Gestionnaire d'événements pour vérifier si l'adresse email est valide lors de la perte de focus
    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert('Veuillez entrer une adresse e-mail valide');
        }
    }

    return (
        <footer className='jh-footer'> {/* Élément footer avec la classe CSS 'jh-footer' */}
            <div className='jh-footer-elem'>
                For plants
            </div>
            <div className='jh-footer-elem'>
                Subscribe to our newsletter
            </div>
            <input
                placeholder='Enter your email'
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
            /> {/* Input pour saisir l'adresse email */}
            <div>
                {Nbm} {/* Affichage du nombre */}
            </div>
            <div>
                <button onClick={increment}> {/* Bouton pour incrémenter le nombre */}
                    +
                </button>
                <button onClick={decrement}> {/* Bouton pour décrémenter le nombre */}
                    -
                </button>
            </div>
        </footer>
    );
}

export default Footer; // Export du composant Footer pour qu'il puisse être utilisé ailleurs dans l'application
