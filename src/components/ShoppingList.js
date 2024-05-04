import React, { useState } from 'react';
import { plantList } from '../datas/plantList';
import '../style/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('');
  const categories = plantList.reduce((acc, plant) =>
    acc.includes(plant.category) ? acc : acc.concat(plant.category), []);

  function addToCart(name, price) {
    const currentPlantAdded = cart.find(plant => plant.name === name);
    if (currentPlantAdded) {
      const cartFiltered = cart.filter(plant => plant.name !== name);
      updateCart([...cartFiltered, { name, price, amount: currentPlantAdded.amount + 1 }]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  const sameWaterLight = plantList.find(plant => plant.light === plant.water);

  const maxWater = plantList.filter(plant => plant.water === 3);

  const minLight = plantList.filter(plant => plant.light === 1);

  let minLight1 = plantList.filter( plant => plant.name.includes("a")); 

  const maxPrice = plantList.reduce((max, plant) => (plant.price > max.price ? plant : max), plantList[0]);

  console.log('sameWaterLight:', sameWaterLight);
  console.log('maxWater:', maxWater);
  console.log('minLight:', minLight);
  console.log('minLight:', minLight1);
  console.log('maxPrice:', maxPrice);

  return (
    <div className='jh-shoppingList'>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className='jh-plant-list'>
        {plantList.map(({ id, cover, name, price, category, light, water }) => {
          if (activeCategory === '' || activeCategory === category) {
            return (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  price={price}
                  light={light}
                  water={water}
                />
                <button onClick={() => addToCart(name, price)} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Ajouter</button>
              </div>
            );
          }
          return null;
        })}
      </ul>
    </div>
  )
}

export default ShoppingList;
