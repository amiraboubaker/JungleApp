import { useEffect, useState } from 'react'; // Import des hooks useEffect et useState depuis React
import logo from '../assets/logo.png'; // Import de l'image du logo depuis le chemin relatif '../assets/logo.png'
import '../style/layout.css'; // Import des styles CSS depuis le fichier 'layout.css' situé dans le dossier 'style'
import Banner from './Banner'; // Import du composant 'Banner' depuis le fichier './Banner.js'
import Cart from './Cart'; // Import du composant 'Cart' depuis le fichier './Cart.js'
import Footer from './Footer'; // Import du composant 'Footer' depuis le fichier './Footer.js'
import ShoppingList from './ShoppingList'; // Import du composant 'ShoppingList' depuis le fichier './ShoppingList.js'

function App() { // Déclaration du composant principal 'App'
  // Récupération des données du panier depuis le stockage local, s'il existe, sinon initialisation à un tableau vide
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  // Effet de côté qui se déclenche à chaque changement dans le panier et met à jour les données dans le stockage local
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Rendu du composant 'App'
  return (
    <div className="App"> {/* Conteneur principal de l'application avec la classe CSS 'App' */}
      <Banner> {/* Composant 'Banner' contenant le logo et le titre */}
        <img
          src={logo} // Source de l'image du logo
          alt='' // Texte alternatif de l'image vide
          className="jh-logo" // Classe CSS de l'image du logo
        />
        <h2 className="jh-title">Jungle house</h2> {/* Titre de l'application */}
      </Banner>
      <div className='jh-layout-inner'> {/* Conteneur intérieur du layout */}
        <Cart cart={cart} updateCart={updateCart}/> {/* Composant 'Cart' pour afficher le panier */}
        <ShoppingList cart={cart} updateCart={updateCart}/> {/* Composant 'ShoppingList' pour afficher la liste des produits */}
      </div>
      <Footer/> {/* Composant 'Footer' pour afficher le pied de page */}
    </div>
  );
}

export default App; // Export du composant 'App' pour qu'il puisse être utilisé ailleurs dans l'application
