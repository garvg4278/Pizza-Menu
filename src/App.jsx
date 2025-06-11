import './App.css';

function App() {
  return (
    <>
      <h1 id="Menu">Pizza Menu</h1>
      <div className="menu-grid">
        <PizzaCard
          image='https://hillpizza.in/ambikapur/wp-content/uploads/sites/7/2022/11/Onion-capcicum-pizza.jpg'
          name='Capsicum and Onion'
          ingredients='Capsicum, Onion, Cheese'
          price='149'
          rating='4.2'
          available={true}
        />
        <PizzaCard
          image='https://www.awesomecuisine.com/wp-content/uploads/2014/01/capsicum-pizza.jpg'
          name='Corn Cheese'
          ingredients='Corn, Cheese, Herbs'
          price='149'
          rating='4.5'
          available={true}
        />
        <PizzaCard
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bdKKaTySsc4t8ahzTXQIG87Ls_J8ph907w&s'
          name='Margherita'
          ingredients='Cheese, Tomato Sauce, Basil'
          price='129'
          rating='4.0'
          available={false}
        />
        <PizzaCard
          image='https://parcelkaro.in/wp-content/uploads/2023/02/Double-Cheese-Margherita-Loaded-with-Double-Cheese.webp'
          name='Double Cheese'
          ingredients='Extra Cheese, Oregano, Olive'
          price='169'
          rating='4.7'
          available={true}
        />
      </div>
    </>
  );
}

function PizzaCard({ image, name, ingredients, price, rating, available }) {
  return (
    <div className="pizza-card">
      <img src={image} alt={name} className="pizza-img" />
      <h2>{name}</h2>
      <p><strong>Ingredients:</strong> {ingredients}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p className={available ? "available" : "unavailable"}>
        {available ? "Available" : "Out of Stock"}
      </p>
      <button className="add-btn" disabled={!available}>
        {available ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}

export default App;
