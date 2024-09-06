import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import clsx from 'clsx';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const searchBoxStyles = clsx(styles.searchBox, 'searchBox');

    const handleChange = (e) => dispatch(changeFilter(e.target.value));

    return (
        <div className={searchBoxStyles}>
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={filter}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;