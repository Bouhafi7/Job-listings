import { useEffect, useState } from "react";
import { Jobs } from "./Jobs";
import Images from "./Images";

export default function Job({ filterItem, setFilterItem }) {

    const [filteringJobs, setFilteringJobs] = useState([]);
    
    function AddJobsToFilter(e) {
        setFilterItem(Array.from(new Set([...filterItem, e.target.innerText])));
    }

    const filterJobsItem = () => {
        const filteredJobs = Jobs.filter(job => {
            const tags = [
                job.level,
                job.role,
                ...job.languages,
                ...job.tools
            ];
            
            return filterItem.every(filter => tags.includes(filter));
        });
        setFilteringJobs(filteredJobs);
    };

    useEffect(() => {
        filterJobsItem();
    }, [filterItem]);

    return (
        <div className="jobs-container">
            <div className="container">
                {filteringJobs.map((job, index) => (
                    <div className="job-container" key={job.id}>
                        <img src={Images[index]} alt="" className="profile-pic" />
                        <div>
                            <div className="info">
                                <div>
                                    <div className="name">{job.company}</div>
                                    {job.new && <div className="new">new!</div>}
                                    {job.featured && <div className="featured">featured</div>}
                                </div>
                                <div className="job">{job.position}</div>
                                <div>
                                    <div>{job.postedAt}</div>
                                    <div>{job.contract}</div>
                                    <div>{job.location}</div>
                                </div>
                            </div>
                            <div className="tags">
                                <p onClick={e => AddJobsToFilter(e)}>{job.level}</p>
                                <p onClick={e => AddJobsToFilter(e)}>{job.role}</p>
                                {job.languages.map((language, index) => <p onClick={e => AddJobsToFilter(e)} key={index}>{language}</p>)}
                                {job.tools.map((tool, index) => <p onClick={e => AddJobsToFilter(e)} key={index}>{tool}</p>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}