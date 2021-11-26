import styles from './job.module.css'
import Image from 'next/image'

const JobCard = ({job}) => {
    return(
        <div className={styles.card}>
            <img 
                className={styles.logo} 
                src={`${job.logo}`}
                alt={`A ${job.company} logo`}
            />
            <div className={styles.cardInfo}>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.isNew}>{job.isNew}</p>
                <p className={styles.isFeatured}>{job.isFeatured}</p>
                <h5 className={styles.position}>{job.position}</h5>
                <p className={styles.workSchedule}>
                    {job.postedAt} &#8226; {job.contract} &#8226; {job.jobLocation} 
                </p>
            </div>
            <hr className={styles.divisionBar} />
            <div className={styles.categories}>
                {job.languages.map(language => (<p className={styles.category}>{language}</p>))} 
                {job.tools.map(tool => (<p className={styles.category}>{tool}</p>))}
            </div>
        </div>
    );
}

export default JobCard 
