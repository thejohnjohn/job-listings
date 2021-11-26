import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from 'react'

import JobCard from '../components/job/job'
import { FilterCard, Category } from '../components/categories/filter'

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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon32.png" />
      </Head>    
      <header>
        <Image
            priority
            className={utilStyles.headerBg}
            src="/bg-header-mobile.svg"
            width={375}
            height={168}
        />
      </header>
      <main>
          {
              jobList.map((job, index) =>{
                  return(<JobCard key={index} job={job} />)
              }) 
          } 
      </main>
      <footer className={styles.footer}>
         A challenge from 
         <a
          href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
          target="_blank"
          rel="noopener noreferrer">Frontend Mentor</a> 
      </footer>
    </div>
  )
}
