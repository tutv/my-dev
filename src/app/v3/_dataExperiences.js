export default function _dataExperiences() {
    return [
        {
            job_title: 'Senior Software Engineer',
            job_org: 'Merchize, Vietnam',
            duration: 'Nov 2018 - Jul 2022 (3 yrs 9 mos)',
            tech_stacks: [
                'Node.js',
                'Next.js',
                'React',
                'MongoDB',
                'Redis',
                'RabbitMQ',
                'EFK',
                'Kubernetes',
                'Docker',
                'AWS'
            ],
            highlights: [
                <li>Built a <strong>high availability</strong> and <strong>scalable</strong> eCommerce platform from
                    scratch with <strong>microservice</strong> architecture and Kubernetes, serving more
                    than <strong>1,000+</strong> active stores and thousands of daily orders.</li>,
                <li><strong>Reduced costs</strong> by 60% each month by converting the system from single-tenant
                    architecture to <strong>multi-tenant architecture</strong> and using <strong>spot instances</strong> provided by
                    Amazon.</li>,
                <li>Collaborated with the SRE team to build fully <strong>automated CI/CD</strong> pipelines for code
                    deployment using GitLab CI.</li>
            ]
        },
        {
            job_title: 'Software Engineer',
            job_org: 'Foobla, Vietnam',
            duration: 'Sep 2017 - Nov 2018 (1yr 3mos)',
            tech_stacks: [
                'Node.js',
                'React',
                'Puppeteer',
                'Redis',
                'MongoDB',
                'ElasticSearch'
            ],
            highlights: [
                <><strong>Project: SpyBadass</strong></>,
                <li>Built a system to crawl advertising from Facebook and provided valuable ideas to help sellers make
                    decisions better.</li>,
                <li>Launched the app to public users after 1 month and had more than 100 paid users after the first
                    day.</li>,
                <div className="mb-2"/>,
                <><strong>Project: SpyAMZ</strong></>,
                <li>Worked as a full-stack developer to develop a research tool, which is providing more than 120
                    million
                    products updated ranking data daily from Amazon Merch on demand and is used by more than thousands
                    of paid users.</li>
            ]
        },
        {
            job_title: 'Co-Founder & Instructor',
            job_org: 'UET Code Camp, Vietnam',
            duration: 'Feb 2018 - Jul 2019 (1yr 6mos)',
            tech_stacks: [
                'Node.js',
                'React',
                'MongoDB'
            ],
            highlights: [
                <li>Volunteered, built, and taught two tech courses for 2 years with more than 60+ students at
                    UET-VNU.</li>,
                <li>First course: How to build a web app with React.js (2018).</li>,
                <li>Second course: How to become a backend developer with Node.js (2019).</li>
            ]
        },
        {
            job_title: 'WordPress Developer',
            job_org: 'Foobla, Vietnam',
            duration: 'Jun 2015 - Aug 2017 (2yrs 2mos)',
            tech_stacks: [
                'PHP',
                'HTML5',
                'Javascript',
                'SCSS',
                'MySQL',
                'Nginx'
            ],
            highlights: [
                <li>Developed various plugins and themes for WordPress, which are on top best-selling items on ThemeForest (Envato).</li>,
            ]
        }
    ]
}
