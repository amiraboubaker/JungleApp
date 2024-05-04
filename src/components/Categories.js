import React from 'react'; // Import de React
import '../style/categorie.css'; // Import des styles CSS du composant Categories depuis le fichier 'categorie.css'

function Categories({ categories, setActiveCategory, activeCategory }) { // Déclaration du composant fonctionnel Categories prenant les props categories, setActiveCategory et activeCategory
  return (
    <div className='jh-categorie'> {/* Conteneur des catégories avec la classe CSS 'jh-categorie' */}
      <select
        value={activeCategory} // Valeur sélectionnée dans la liste déroulante
        className='jh-categorie-select' // Classe CSS du select
        onChange={(e) => setActiveCategory(e.target.value)} // Gestionnaire d'événements pour changer la catégorie active
      >
        <option value={''}>none</option> {/* Option par défaut de la liste déroulante */}
        {categories.map((category) => ( // Mapping sur les catégories pour afficher chaque option dans la liste déroulante
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Reset</button> {/* Bouton pour réinitialiser la catégorie active */}
    </div>
  );
}

export default Categories; // Export du composant Categories pour qu'il puisse être utilisé ailleurs dans l'application
