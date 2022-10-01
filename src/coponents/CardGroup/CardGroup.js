import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products =[
        {id: 1, name: 'Lenovo', price: 1000, image: 'https://i.ibb.co/7QpKsCX/lenovo.jpg'},
        {id: 2, name: 'Asus', price: 2000, image: 'https://i.ibb.co/7QpKsCX/lenovo.jpg'},
        {id: 3, name: 'Dell', price: 3000, image: 'https://i.ibb.co/7QpKsCX/lenovo.jpg'},
    ]

    return (
        <div>
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default CardGroup;