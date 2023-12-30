// display  stock data using card 
import React from 'react';
export default function StockRow(props) {
    const { stock } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{stock.name}</h5>
                <p className="card-text">{stock.price}</p>
                <p className="card-text">{stock.symbol}</p>
            </div>
        </div>
    );
}   
    

