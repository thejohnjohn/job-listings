// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import jobs from './data.json';
import jobListHandler from './jobs/jobs';

export default function handler(req, res) {
    try{
        jobListHandler(req.query);
        res.status(200).json(jobs);
    }
    catch(err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}
