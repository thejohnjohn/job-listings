import Image from 'next/image';

import styles from './filter.module.css';

const FilterCard = ({categories}) =>{
    return(
    <div className={styles.filterCard} alt="A card with results of job searches">
        <div className={styles.categoryContainer}>{categories}</div>
        <button className={styles.clearButton} 
            alt="A clear button for clean all search preferences">Clear</button>
    </div>);
}

const Category = (category) =>{
    return(
        <div className={styles.categoryTablet}>
            <p className={style.categoryName}>{category}</p>
            <button className={style.closeButton} 
                    alt="Close button. Clearing your search box">
                <Image
                    src="/icon-remove.svg"
                    width={5}
                    height={5}
                />
            </button>
        </div>
    );
}

export default { FilterCard, Category };
