import Head from 'next/head'

import React, { useState, useEffect } from 'react'

import JobCard from '../components/job/job'
import FilterCard from '../components/categories/filter-container'

import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

import JobListAPI from '../services/JobListAPI'
import axios from 'axios';

export default function Home() {
	const [addr, setAddr] = useState(JobListAPI.getURL());
	const [jobs, setJobs] = useState([]);
	const [tags, setTags] = useState([]);

	useEffect(async () => {
		await axios(addr)
            .then(res => {
                setJobs(res.data)
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
			<img className={utilStyles.headerBg} src="/bg-header-mobile.svg" />
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
