const jobs = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "http://localhost:3001/images/photosnap.svg",
        "isNew": true,
        "isFeatured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "jobLocation": "USA Only",
        "languages": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "tools": []
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "http://localhost:3001/images/manage.svg",
        "isNew": true,
        "isFeatured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "jobLocation": "Remote",
        "languages": [
          "Python"
        ],
        "tools": [
          "React"
        ]
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "http://localhost:3001/images/account.svg",
        "isNew": true,
        "isFeatured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "jobLocation": "USA Only",
        "languages": [
          "JavaScript"
        ],
        "tools": [
          "React",
          "Sass"
        ]
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "http://localhost:3001/images/myhome.svg",
        "isNew": false,
        "isFeatured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "jobLocation": "USA Only",
        "languages": [
          "CSS",
          "JavaScript"
        ],
        "tools": []
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "http://localhost:3001/images/loop-studios.svg",
        "isNew": false,
        "isFeatured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "jobLocation": "Worldwide",
        "languages": [
          "JavaScript"
        ],
        "tools": [
          "Ruby",
          "Sass"
        ]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "http://localhost:3001/images/faceit.svg",
        "isNew": false,
        "isFeatured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "jobLocation": "UK Only",
        "languages": [
          "Ruby"
        ],
        "tools": [
          "RoR"
        ]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "http://localhost:3001/images/shortly.svg",
        "isNew": false,
        "isFeatured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "jobLocation": "Worldwide",
        "languages": [
          "HTML",
          "JavaScript"
        ],
        "tools": [
          "Sass"
        ]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "http://localhost:3001/images/insure.svg",
        "isNew": false,
        "isFeatured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "jobLocation": "USA Only",
        "languages": [
          "JavaScript"
        ],
        "tools": [
          "Vue",
          "Sass"
        ]
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "http://localhost:3001/images/eyecam-co.svg",
        "isNew": false,
        "isFeatured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "jobLocation": "Worldwide",
        "languages": [
          "JavaScript",
          "Python"
        ],
        "tools": [
          "Django"
        ]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "http://localhost:3001/images/the-air-filter-company.svg",
        "isNew": false,
        "isFeatured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "jobLocation": "Worldwide",
        "languages": [
          "JavaScript"
        ],
        "tools": [
          "React",
          "Sass"
        ]
      }
];

const jobListFilter = (jobTags) => {
    let keys = Object.keys(jobTags);
    let listFiltered = jobs;
    
    keys.forEach((jobTag) => {
        jobTags[jobTag] = jobTags[jobTag].split(',');
    });

    let mapFilter = new Map(Object.entries(jobTags));

    mapFilter.forEach((values, key) => {
        values.forEach((value) =>{
            listFiltered = listFiltered.filter((job) => {
                return(job[key].includes(value))
            });
        });
    })

    return listFiltered;
}

export default jobListFilter;
