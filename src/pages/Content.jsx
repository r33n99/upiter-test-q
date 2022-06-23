import React from 'react';
import { Categories } from '../components/Categories';
import { useEffect } from 'react';
import { Card } from '../components/Card';
import { getImageData, loadMoreImages, selectImages } from '../slices/imageData';
import { useDispatch, useSelector } from 'react-redux';
import { selectfilter } from '../slices/filter';

export const Content = () => {
    const dispatch = useDispatch();
    const { filter } = useSelector(selectfilter);
    const { cards, newCards } = useSelector(selectImages);
    useEffect(() => {
        dispatch(getImageData(filter));
    }, [filter, dispatch]);

    const loadMore = () => {
        dispatch(loadMoreImages(newCards));
    };

    return (
        <div className="content">
            <div className="container">
                <Categories />
                <div className="content__items">
                    {cards.map((image, index) => (
                        <Card key={image.id + index} img={image.avatar} name={image.name} category={image.categori} />
                    ))}
                </div>
                <div className="content__bottom">
                    <div onClick={loadMore} className="load-more">
                        LOAD MORE
                    </div>
                </div>
            </div>
        </div>
    );
};
