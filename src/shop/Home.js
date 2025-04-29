import React, { useState } from 'react';
import { getData } from './data';
import { FormAdd } from './FormAdd';

function Home() {
  const data = JSON.parse(localStorage.getItem('products')) || [];
  const [products, setProducts] = useState(data);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <div className="flex gap-4">
          <button onClick={() => setShowForm(false)}>Home</button>
          <button onClick={() => setShowForm(true)}>Add</button>
        </div>
      </nav>

      <h1 className="text-3xl font-bold text-center my-8">THỜI TRANG NAM</h1>

      {/* Nội dung */}
      {showForm ? (
        <FormAdd 
          setShowForm={setShowForm}
          products={products}
          setProducts={setProducts}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4">
              <img src={product.image} alt={product.name} className="h-40 object-cover mb-4" />
              <h2 className="text-lg font-semibold text-center">{product.name}</h2>
              {product.code && <p className="text-gray-500 text-sm">{product.code}</p>}
              {product.price !== null && (
                <div className="text-center my-2">
                  <span className="text-red-500 font-bold text-lg">{product.price}.00 đ</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm ml-2">{product.oldPrice}.00 đ</span>
                  )}
                </div>
              )}
              {product.price !== null && (
                <button className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded mt-auto">
                  Đặt mua
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
