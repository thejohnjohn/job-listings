// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import jobs from './data.json';
const jobs = require('./data.json');
import jobListFilter from './jobs/jobs';

export default function handler(req, res) {
    try{
        let j = jobListFilter(req.query);
        console.log({"jobs": j});
        res.status(200).json({"jobs": j});
    }
    catch(err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}
