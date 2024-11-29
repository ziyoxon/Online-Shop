import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const Product = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProducts = await axios.get(`${API_URL}/products`);
        const resCategories = await axios.get(`${API_URL}/products/categories`);

        setData(resProducts.data);
        setCategories(resCategories.data);
      } catch (error) {
        console.error("Error fetching products or categories:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = selectedCategory
    ? data.filter((product) => product.category === selectedCategory)
    : data;

  return (
    <div className="container">
      <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Products
        </h2>

        <div className="flex justify-center mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-700 text-gray-200 py-2 px-4 rounded-md"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((pro) => (
            <div
              key={pro.id}
              className="bg-white rounded-lg shadow-lg p-4 transition hover:shadow-2xl hover:scale-105"
            >
              <img
                src={pro.image}
                alt={pro.title}
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">
                {pro.title}
              </h3>
              <p className="text-gray-600">Price: ${pro.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
