# 🍕 React Pizza Menu App

This is a simple React application that displays a list of pizzas using cards. Each card contains an image, name, ingredients, price, rating, and availability status. It also includes an 'Add to Cart' button which gets disabled if the pizza is out of stock.

---

## 📸 Screenshots


---

## 🚀 Features

- Responsive layout with flexbox
- Each pizza card includes:
  - Image
  - Name
  - Ingredients
  - Price (₹)
  - Star rating
  - Availability
  - Add to Cart button
- Uniform card design using 

---

## 🛠 Tech Stack

- React.js (Functional Components)
- HTML / CSS (Custom Styling)
- JSX

---

## 📂 Folder Structure

```
root/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 📦 Installation

To run this app locally:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```

---

## 🔧 Customization

You can easily add more pizzas by adding more `<PizzaCard />` components inside the `.menu-grid` container.

```jsx
<PizzaCard
  image='...'
  name='New Pizza'
  ingredients='...'
  price='...'
  rating='...'
  available={true}
/>
```

---

## 📬 Feedback

If you have any suggestions or issues, feel free to open an issue or contribute with a pull request.

---

## © License

This project is open source and available under the [MIT License](LICENSE).

