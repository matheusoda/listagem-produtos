import React, { useEffect, useState } from 'react';
import { CardProducts } from './CardProducts';
import { Header } from './Header';

import '../styles/global.css';

import api from '../services/api';

export function ListProducts() {
    const [products, setProducts] = useState([]);
    const [contadorProdutos, setcontadorProdutos] = useState(0);

    useEffect(() => {
        api.get('products').then((data) => {
            setProducts(data.data);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header contadorProdutos={contadorProdutos}></Header>
            <CardProducts products={products} setcontadorProdutos={setcontadorProdutos} className="card-products">
            </CardProducts>
        </>
    )
}