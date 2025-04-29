import React, { useEffect, useState } from 'react';

export async function getData() {
    try {
        const api = await fetch('http://127.0.0.1:8000/api/data');
        const data = await api.json();
        return data;
    } catch (error) {
        console.error("Lỗi khi fetch API:", error);
        return []; 
    }
}

export function Item({ name, image, des }) {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={`/image/product/${image}`} alt={name} style={{ width: '150px' }} />
            <div><strong>{name}</strong></div>
            <div>{des}</div>
        </div>
    );
}

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
                    image={product.image}
                    des={product.description}
                />
            ))}
        </div>
    );
}

export function Show2() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getData();
            const data = products.filter(item => {
                return item.id_type == 5
            })
            setData(data);
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
                    image={product.image}
                    des={product.description}
                />
            ))}
        </div>
    );
}
