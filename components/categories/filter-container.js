import Image from 'next/image';

import styles from './filter-container.module.css';
import styles2 from './filter-tablet.module.css';

const FilterCard = ({show, categories, clearSearchPreferences, remove}) =>{
    return( 
        <div style={show} className={styles.filterCard} 
            alt="A card with results of job searches">
                <div className={styles.categoryContainer}>
                    {
                        categories?.map( (tagName) => {
                            return(
                                <div key={tagName} className={styles2.categoryTablet}>
                                    <span className={styles2.categoryName}>{ tagName }</span>
                                    <button onClick={remove.bind(this, tagName)}
                                            className={styles2.closeButton} 
                                            alt="Close button. Clearing your search box">
                                        <Image
                                            src="/icon-remove.svg"
                                            width={15}
                                            height={15}
                                        />
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
                <p className={styles.clearButton} 
                    alt="A clear button for clean all search preferences"
                    onClick={clearSearchPreferences}>    
                    Clear</p>
        </div>
    );
}

export default FilterCard;
