// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import jobs from './data.json';

export default function handler(req, res) {
    try{
        res.status(200) 
    }
    catch{
        res.status(500).json({statusCode: 500, message: err.message})
    }
}
