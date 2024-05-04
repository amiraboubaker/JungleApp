import React from 'react'; // Import de React
import '../style/PlantItem.css'; // Import des styles CSS du composant PlantItem depuis le fichier 'PlantItem.css'
import CareScale from './CareScale'; // Import du composant CareScale depuis le fichier 'CareScale.js'

function PlantItem({cover, name, price, light, water}) { // Déclaration du composant fonctionnel PlantItem prenant les props cover, name, price, light et water
    return (
        <li className='jh-plant-item'> {/* Élément de liste avec la classe CSS 'jh-plant-item' */}
            <span className='jh-plant-item-price'>{price}€</span> {/* Prix de la plante */}
            <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} /> {name} {/* Image de la plante et nom de la plante */}
            <div>
                {/* Composant CareScale pour afficher l'échelle de soin pour l'eau */}
                <CareScale careType="water" scaleValue={water} />
                {/* Composant CareScale pour afficher l'échelle de soin pour la lumière */}
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem; // Export du composant PlantItem pour qu'il puisse être utilisé ailleurs dans l'application
