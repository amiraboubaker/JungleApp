import React from 'react'; // Import de React
import Sun from '../assets/sun.svg'; // Import de l'icône du soleil depuis le chemin relatif '../assets/sun.svg'
import water from '../assets/water.svg'; // Import de l'icône d'eau depuis le chemin relatif '../assets/water.svg'

const CareScale = ({careType, scaleValue}) => { // Déclaration du composant fonctionnel CareScale prenant les props careType et scaleValue
    console.log(careType, scaleValue); // Affichage dans la console des valeurs de careType et scaleValue

    // Objet contenant les labels de quantité en fonction de la valeur de scaleValue
    const quantityLabel = {
        1: 'little',
        2: 'moderate',
        3: 'much'
    };

    // Tableau contenant les valeurs de l'échelle de soin
    const range = [1, 2, 3];

    // Définition du type d'icône en fonction du type de soin (light ou watering)
    const scaleType = careType === "light" ? (
        <img src={Sun} alt='sun-icon' /> // Icône du soleil si le type de soin est 'light'
    ) : (
        <img src={water} alt='water-icon'/> // Icône d'eau si le type de soin est 'watering'
    );

    return (
        <div onClick={() => alert(`This Plant requires ${quantityLabel[scaleValue]} ${careType === "light" ? "light" : "watering"}`)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? (<span key={rangeElem.toString()}>{scaleType}</span>) : null)} {/* Affichage des icônes en fonction de la valeur de scaleValue */}
        </div>
    );
}

export default CareScale; // Export du composant CareScale pour qu'il puisse être utilisé ailleurs dans l'application
