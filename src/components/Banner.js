import React from 'react'; // Import de React
import '../style/Banner.css'; // Import des styles CSS du composant Banner depuis le fichier 'Banner.css'

function Banner({children}) { // Déclaration du composant fonctionnel Banner qui prend un prop 'children'
  return (
    <div className='jh-banner'> {/* Div principale du composant avec la classe CSS 'jh-banner' */}
      {children} {/* Contenu à l'intérieur du composant, généralement le logo et le titre */}
    </div>
  );
}

export default Banner; // Export du composant Banner pour qu'il puisse être utilisé ailleurs dans l'application
