import Head from 'next/head'
import Image from 'next/image'

import React, { useState, useRef } from 'react'

import JobCard from '../components/job/job'
import FilterCard from '../components/categories/filter-container'
import Category from '../components/categories/filter-tablet'

import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

import jobListApi from '../services/jobListAPI'
import { useEffect } from 'react/cjs/react.production.min'

export const getServerSideProps = async () => {

  	let jobList = await jobListApi.getJobList();

	return {
		props: {
				jobList
		}
	}
}

export default function Home({jobList}) {
	const [selectedTags, setSelectedTags] = useState(new Set());
	const [tags, setTags] = useState([]);
	const tagRef = useRef('');

	const removeTag = (tagReference) =>{
		setSelectedTags(selectedTags.remove(tagReference))
		setTags()
	}

	return (
		<div className={styles.container}>
			<Head>
			<title>Job List - Find your new job</title>
			<meta name="description" content="Job list - find your opportunities" />
			<link rel="icon" href="/favicon32.png" />
			</Head>    
			<header>
			<img className={utilStyles.headerBg} src="/bg-header-mobile.svg" />
			{tags.length > 0 ? <FilterCard categories={ tags } 
						clearSearchPreferences={ () =>{ setTags([]); setSelectedTags([]) }} /> : null}
			</header>
			<main>
				{
					jobList.map((job, index) =>{
						return(<JobCard key={index} job={job} category={ (tag) => 
						{   
							!selectedTags.has(tag) ? 
							setSelectedTags(selectedTags.add(tag))
							||setTags((prev) => Array.from(new Set([...prev, <Category key={tag} reference={tagRef}
																					   category={tag} 
																					   remove={() =>{removeTag(tag)}} />])))
							: null
						}
						} />)
					}) 
				}
			</main>
			<footer className={styles.footer}>
				A challenge from{' '} 
				<a
				href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
				target="_blank"
				rel="noopener noreferrer">Frontend Mentor</a> 
			</footer>
		</div>
	)
}
