import Image from 'next/image';

import styles from './filter-container.module.css';

const FilterCard = ({categories, clearSearchPreferences}) =>{
    return( 
        <div className={styles.filterCard} 
            alt="A card with results of job searches">
                <div className={styles.categoryContainer}>
                    {categories}
                </div>
                <p className={styles.clearButton} 
                    alt="A clear button for clean all search preferences"
                    onClick={clearSearchPreferences}>    
                    Clear</p>
        </div>
    );
}

export default FilterCard;
