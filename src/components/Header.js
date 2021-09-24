import React from "react";
import { ShoppingCart } from '@material-ui/icons';

import '../styles/header.css';

export function Header({contadorProdutos}) {
    return (
    <section className="header">
        <h1 className="title">
            Listagem Produtos 
        </h1>
        <ShoppingCart className="icon-cart" />
        <div> {contadorProdutos} </div>
    </section>
    )
}