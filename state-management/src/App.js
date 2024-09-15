/*import React, { useState } from 'react';

const App = () => {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState([]); // Categories ka array

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleProductChange = (e) => setProduct(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if category already exists
    const existingCategory = categories.find(cat => cat.name === category);
  
    if (existingCategory) {
      // Agar category exist karti hai, check if product exist karta hai
      const productExists = existingCategory.products.find(prod => prod.product === product);
  
      if (productExists) {
        // Agar product exist karta hai, usko update karo
        const updatedCategories = categories.map(cat => {
          if (cat.name === category) {
            return {
              ...cat,
              products: cat.products.map(prod => {
                if (prod.product === product) {
                  return { ...prod, type, price }; // Update only type and price
                }
                return prod;
              })
            };
          }
          return cat;
        });
  
        setCategories(updatedCategories);
        alert('Product updated in existing category!');
      } else {
        // Agar product exist nahi karta, naya product add karo category mein
        const updatedCategories = categories.map(cat => {
          if (cat.name === category) {
            return {
              ...cat,
              products: [...cat.products, { product, type, price }]
            };
          }
          return cat;
        });
  
        setCategories(updatedCategories);
        alert('New product added in existing category!');
      }
    } else {
      // Agar category nahi exist karti, nayi category create karo
      setCategories([
        ...categories,
        {
          name: category,
          products: [{ product, type, price }]
        }
      ]);
      alert('New category added!');
    }
  
    // Input fields clear kar do
    setCategory('');
    setProduct('');
    setType('');
    setPrice('');
  };
  // Category ko delete karne ka function
  const handleDeleteCategory = (categoryName) => {
    const filteredCategories = categories.filter(cat => cat.name !== categoryName);
    setCategories(filteredCategories);
    alert('Category deleted!');
  };

  return (
    <div>
      <h1>Product Category Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={handleCategoryChange}
        />
        <input
          type="text"
          placeholder="Enter Product"
          value={product}
          onChange={handleProductChange}
        />
        <input
          type="text"
          placeholder="Enter Type"
          value={type}
          onChange={handleTypeChange}
        />
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={handlePriceChange}
        />

        <button type="submit">Add/Update Product</button>
      </form>

      <h2>Categories</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <strong>{cat.name}:</strong>
            <ul>
              {cat.products.map((prod, idx) => (
                <li key={idx}>
                  {prod.product} - {prod.type} - ${prod.price}
                </li>
              ))}
            </ul>
            <button onClick={() => handleDeleteCategory(cat.name)}>Delete Category</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

*/

import React, { useState } from 'react';

const App = () => {
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [product, setProduct] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newCategory.trim() && product.trim() && type.trim() && price.trim()) {
      // Check if the category exists
      const existingCategoryIndex = category.findIndex(
        (cat) => cat.name.toLowerCase() === newCategory.toLowerCase()
      );

      if (existingCategoryIndex !== -1) {
        // If category exists, check if the product exists within that category
        const updatedCategory = [...category];
        const existingProductIndex = updatedCategory[existingCategoryIndex].products.findIndex(
          (prod) => prod.product.toLowerCase() === product.toLowerCase()
        );

        if (existingProductIndex !== -1) {
          // Product exists, update its type and price
          updatedCategory[existingCategoryIndex].products[existingProductIndex] = {
            product,
            type,
            price,
          };
        } else {
          // If the product doesn't exist, add it
          updatedCategory[existingCategoryIndex].products.push({ product, type, price });
        }

        // Update the category list with the new changes
        setCategory(updatedCategory);
      } else {
        // If the category doesn't exist, create a new one
        const newCategoryObject = {
          name: newCategory,
          products: [{ product, type, price }],
        };
        setCategory([...category, newCategoryObject]);
      }

      // Clear the input fields
      setNewCategory('');
      setProduct('');
      setType('');
      setPrice('');
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleDelete = (categoryIndex, productIndex) => {
    const updatedCategory = [...category];
    updatedCategory[categoryIndex].products.splice(productIndex, 1);

    // If no products left in the category, delete the category
    if (updatedCategory[categoryIndex].products.length === 0) {
      updatedCategory.splice(categoryIndex, 1);
    }
    setCategory(updatedCategory);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <input
          placeholder="Enter product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          placeholder="Enter type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add category</button>
      </form>

      <h2>Categories</h2>
      <ul>
        {category.map((cat, categoryIndex) => (
          <li key={categoryIndex}>
            <strong>{cat.name}</strong>
            <ul>
              {cat.products.map((prod, prodIndex) => (
                <li key={prodIndex}>
                  ★ {prod.product} &nbsp; &nbsp; &nbsp; ★ {prod.type} &nbsp; &nbsp; &nbsp; ★ {prod.price} 
                  <button onClick={() => handleDelete(categoryIndex, prodIndex)}>
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
