// import React from 'react'
import why from "./WhyUs.module.css";
import job from "../../assets/job.svg";
import mentor from "../../assets/mentor.svg";
import resources from "../../assets/resources.svg";

const WhyUs = () => {
  return (
    <section className="why.Us">
      <h2 className={why.whyUs}> Why Us?</h2>
      <div className={why.study}>
        <div>
          <h2>Learning Resources</h2>
          <p>
            We empower our benefactors through great learning resources, which
            make learning easier, faster and achievable.
          </p>
        </div>
        <div>
          <img src={resources} alt="" />
        </div>
      </div>
      <div className={why.study}>
        <div>
          <img src={job} alt="" />
        </div>
        <div>
          <h2>Job Opportunities</h2>
          <p>
            Our benefactors enjoy great resources to equip them for jobs, as
            well as being guided through career pathways in their various
            skill/career paths.
          </p>
        </div>
      </div>
      <div className={why.study}>
        <div>
          <h2>Mentoring Sessions</h2>
          <p>
            Mentoring is enjoyed by our benefactors as they get to be attended
            to by mentors who guides them through their growth process.
          </p>
        </div>
        <div>
          <img src={mentor} alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default WhyUs;
