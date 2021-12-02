import Head from 'next/head'
import Image from 'next/image'

import React from 'react'

import JobCard from '../components/job/job'
import FilterCard from '../components/categories/filter-container'
import Category from '../components/categories/filter-tablet'

import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

import jobListApi from '../services/jobListAPI'

export const getServerSideProps = async () => {

  let jobList = await jobListApi.getJobList();

  return {
      props: {
            jobList
      }
  }
}

export default function Home({jobList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Job List - Find your new job</title>
        <meta name="description" content="Job list - find your opportunities" />
        <link rel="icon" href="/favicon32.png" />
      </Head>    
      <header>
        <img className={utilStyles.headerBg} src="/bg-header-mobile.svg" />
        <FilterCard categories={<Category category={"teste"}/>} /> 
      </header>
      <main>
         {
              jobList.map((job, index) =>{
                  return(<JobCard key={index} job={job} />)
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
