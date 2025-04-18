import React, { useEffect, useState } from 'react';

// Gọi API
export async function getData() {
    try {
        const api = await fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products');
        const data = await api.json();
        return data;
    } catch (error) {
        console.error("Lỗi khi fetch API:", error);
        return []; // fallback để tránh lỗi khi map
    }
}

// Component hiển thị từng sản phẩm
export function Item({ name, image, des }) {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={image} alt={name} style={{ width: '150px' }} />
            <div><strong>{name}</strong></div>
            <div>{des}</div>
        </div>
    );
}

// Component chính để gọi API và render danh sách
export function Show() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getData();
            setData(products);
            setLoading(false);
        }

        fetchProducts();
    }, []);



    return (
        <div>
            {data.map((product) => (
                <Item
                    key={product.id}
                    name={product.name}
                    image={product.avatar}
                    des={product.description}
                />
            ))}
        </div>
    );
}
