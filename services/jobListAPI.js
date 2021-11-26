import axios from "axios";


class jobListApi {
    constructor() {
        this.url = "http://localhost:3001/data"
    }

    async getJobList() {
        let response;

        await axios(this.url)
            .then(res => {
                response = res.data
            }).catch(err => {
                response = err
            })

        return response
    }
}

export default new jobListApi()
