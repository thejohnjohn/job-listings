class JobListApi {
    constructor() {
        this.url = "http://localhost:3001/jobs";
        this.query = "";
        this.parameters = new Map ();
        
        this.parameters.set('role', new Set());
        this.parameters.set('level', new Set());
        this.parameters.set('languages', new Set());
        this.parameters.set('tools', new Set());
    }

    getURL() {
        return `${this.url}?${this.query}`;
    }

    setQuery () {
        let queryBuilder = [];

        this.parameters.forEach((value, key) => {
            if (this.parameters.get(key).size > 0) {
                queryBuilder.push(`${key}=${Array.from(value).toString()}`);
            }
        });

        this.query = queryBuilder.join('&');
    }

    setFilter(role, tag) {
        if(role !== undefined && tag !== undefined) {
            this.parameters.get(role).add(tag);
            this.setQuery();
            return `${this.url}?${this.query}`;
        }
    }

    removeQuery(tag) {
        this.parameters.forEach((value, key) => {
            this.parameters.get(key).delete(tag);
        });

        this.setQuery();
        return `${this.url}?${this.query}`;
    }

    clearFilters() {
        this.parameters.get('role').clear();
        this.parameters.get('level').clear();
        this.parameters.get('languages').clear();
        this.parameters.get('tool').clear();

        this.query = "";
    }
}

export default new JobListApi()
