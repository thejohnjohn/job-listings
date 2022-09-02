import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import JobCard from '../components/job/job'
import FilterCard from '../components/categories/filter-container'

import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

import JobListAPI from '../services/JobListAPI'

const justTest = `http://localhost:3000/api/joblist?languages=JavaScript&tools=React`;
export default function Home() {

	const [addr, setAddr] = useState(JobListAPI.getURL());
	const [jobs, setJobs] = useState([]);
	const [tags, setTags] = useState([]);

	useEffect(async () => {
		await axios(justTest)
            .then(res => {
                setJobs(res.data.jobs)
            }).catch(err => {
                console.log(err);
            })
	},[addr, tags])

	return (
		<div className={styles.container}>
			<Head>
				<title>Job List - Find your new job</title>
				<meta name="description" content="Job list - find your opportunities" />
				<link rel="icon" href="/favicon32.png" />
			</Head>    
			<header>
			<div className={utilStyles.headerBg}/>
			{
				tags.length > 0 ? 
					<FilterCard 
						categories={ tags }
						remove={ (tagName) => { 
								setTags(tags.filter(tag => tag !== tagName));
								setAddr(JobListAPI.removeQuery(tagName));
							}
						}
						clearSearchPreferences={ () => { 
							setTags([]);
							JobListAPI.clearFilters();
							setAddr(JobListAPI.getURL());
						}} /> : null
			}
			</header>
			<main>
			{
				jobs.map((job) =>{
					return(
						<JobCard key={job.company} 
								 job={job} 
								 category={ (role, tag) => {
										setTags(Array.from(new Set([...tags, tag]))); 	
										setAddr(JobListAPI.setFilter(role, tag));
										console.log(JobListAPI.getURL());
									}
								 }
						/>
					)
				}) 
			}
			</main>
			<footer className={styles.footer}>
				A challenge from{' '} 
				<a
				href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
				target="_blank"
				rel="noopener noreferrer">Frontend Mentor</a>
				<p>
					Made by{' '}
					<a
					href="https://github.com/thejohnjohn"
					target="_blank"
					rel="noopener noreferrer">The JohnJohn</a>
				</p>
			</footer>
		</div>
	)
}
