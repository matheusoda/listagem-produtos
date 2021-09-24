import React from 'react';
import '../styles/modal.css';
import { CardContent, Typography} from '@material-ui/core';
import {Cancel} from '@material-ui/icons';

export function Modal({product, onClose= () => {}}) {
    return (
        <section className="modal">
            <CardContent>
                <div className="content-description">
                    <Typography variant="h4">
                        Descrição
                    </Typography>
                    <Typography variant="body1" >
                        {product.description}
                    </Typography>
                </div>
                <div className="content-description">
                    <Typography variant="h4">
                        Memória RAM
                    </Typography>
                    <Typography variant="body1" >
                        {product.memory}
                    </Typography>
                </div>
                <div className="content-description">
                    <Typography variant="h4">
                        Marca
                    </Typography>
                    <Typography variant="body1" >
                        {product.brand}
                    </Typography>
                </div>
                <div className="content-description">
                    <Typography variant="h4">
                        Tipo de chip
                    </Typography>
                    <Typography variant="body1" >
                        {product.chipType}
                    </Typography>
                </div>
            </CardContent>
            <Cancel className="icon-clear" onClick={onClose}/>
        </section>
    )
}