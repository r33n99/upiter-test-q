import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../slices/filter';
export const Card = ({ img, name, category }) => {
    const dispatch = useDispatch();

    const handleClickCategory = (selectedCategory) => {
        dispatch(setFilters(selectedCategory));
    };

    return (
        <div className="card">
            <div className="card__content">
                <img src={img} alt={name} draggable={false} />
                <div onClick={() => handleClickCategory(category)} className="card__button">
                    {category}
                </div>
                <div className="card__name">{name}</div>
            </div>
        </div>
    );
};
