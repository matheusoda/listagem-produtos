import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Button} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import { Modal } from './Modal';

import '../styles/cardproducts.css';

export function CardProducts({products, setcontadorProdutos}) {

    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [totalProdutos, setTotalProdutos] = useState(0);
    
    return (
        <> 
        <div className="list">
            {products?.map((product) => (
                <Card key={product.id}  className="container">
                    <CardContent className="card-content">
                        <div className="card-info" onClick={() => {setOpenModal(true); setModalData(product)}}>
                            <CardMedia 
                                className="card-media"
                                component="img"
                                image={product.picture}
                                alt={product.title}
                            />
                            <div className="content-text">
                                <Typography variant="body1" className="title">
                                    {product.title}
                                </Typography>
                                <Typography variant="h4" >
                                    {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                </Typography>
                            </div>
                        </div>
                        <Button className="button-add">
                            <AddShoppingCart onClick={()=>{setTotalProdutos(totalProdutos + 1); setcontadorProdutos(totalProdutos)}} alt="Adicionar ao Carrinho"/>
                        </Button>
                    </CardContent>
                    {openModal ? (
                        <Modal key={product.id} product={modalData} onClose={() => {setOpenModal(false)}} className="modal">

                        </Modal>
                    ) : null}
                </Card>
            ))}
        </div>
        </>
    )
}