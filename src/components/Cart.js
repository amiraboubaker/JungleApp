import React, { useEffect, useState } from 'react'; // Import de React, useState et useEffect
import '../style/Cart.css'; // Import des styles CSS du composant Cart depuis le fichier 'Cart.css'

function Cart({ cart, updateCart }) { // Déclaration du composant fonctionnel Cart prenant les props cart et updateCart
    const monSteraPrice = 15; // Prix de Monstera
    const ivyPrice = 10; // Prix de l'Ivy
    const flowerPrice = 12; // Prix de la fleur
    const [isOpen, setIsOpen] = useState(true); // État pour gérer l'ouverture ou la fermeture du panier

    // Calcul du prix total en utilisant les éléments du panier
    const total = cart ? cart.reduce((acc, plantType) => acc + (plantType.amount * plantType.price), 0) : 0;

    // Effet de côté pour afficher une alerte avec le total des achats à chaque changement dans le total
    useEffect(() => {
        alert(`Your total purchases are ${total}`);
    }, [total]);

    return (isOpen ? ( // Si le panier est ouvert
        <div className='jh-cont'> {/* Conteneur du panier */}
            <button className='jh-cart-toggle-button' onClick={() => setIsOpen(false)}>Close</button> {/* Bouton pour fermer le panier */}
            {cart && cart.length > 0 ? ( // Si le panier n'est pas vide
                <div>
                    <h2>Cart</h2> {/* Titre du panier */}
                    <ul>
                        {cart.map(({ name, price, amount }, index) => ( // Affichage de chaque élément du panier
                            <li key={`${name}-${index}`}>{name} {price} £ * {amount}</li>
                        ))}
                    </ul>
                    <h3>Total : {total} £</h3> {/* Affichage du prix total */}
                    <button onClick={() => updateCart([])}>Clear Basket</button> {/* Bouton pour vider le panier */}
                </div>
            ) : (
                <div>Your basket is empty</div> // Message si le panier est vide
            )}
        </div>
    ) : (
        <div className='jh-cart-closed' > {/* Si le panier est fermé */}
            <button className='jh-cart-toggle-button' onClick={() => setIsOpen(true)}>Open</button> {/* Bouton pour ouvrir le panier */}
        </div>
    ));
}

export default Cart;
