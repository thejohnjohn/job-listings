import axios from "axios";

class JobListApi {
    constructor() {
        this.url = "http://localhost:3001/jobs";
        this.query = "";
        this.parameters = new Map ();
        
        this.parameters.set('role', new Set());
        this.parameters.set('level', new Set());
        this.parameters.set('languages', new Set());
        this.parameters.set('tool', new Set());
    }

    async getJobList() {
        let response;

        await axios(`${this.url}?${this.query}`)
            .then(res => {
                response = res.data
            }).catch(err => {
                response = err
            })

        return response
    }

    setQuery () {
        let queryBuilder = [];

        this.parameters.forEach((value, key) => {
            if (this.parameters.get(key).size > 0) {
                queryBuilder.push(`${key}=${Array.from(value).toString()}`);
            }
        });

        this.query = queryBuilder.join('&');
        console.log(this.query);
    }

    setFilter(role, tag) {
        if(role !== undefined && tag !== undefined) {
            console.log(`${role} & ${tag}`)
            this.parameters.get(role).add(tag);
            this.setQuery();
        }
    }
}

export default new JobListApi()
