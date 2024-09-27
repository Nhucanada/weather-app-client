import React from 'react';
import Item from './Item';

const ItemList = ({ items, handleDeleteItem}) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="the-items">
                <Item id={item.id} text={item.text} date={item.date} handleDeleteItem={handleDeleteItem} />
                </div>
            ))}
        </div>
    )
}

export default ItemList;