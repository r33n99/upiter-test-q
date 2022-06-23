import { useDispatch, useSelector } from 'react-redux';
import { selectfilter, setFilters } from '../slices/filter';

export const Categories = () => {
  
    const categories = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];
    const dispatch = useDispatch();
    const { filter } = useSelector(selectfilter);

    const handleClickCat = (category) => {
        dispatch(setFilters(category));
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        onClick={() => handleClickCat(category)}
                        className={categories[index] === filter ? 'active-list' : ''}
                        key={index}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};
