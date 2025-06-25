import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/Assets/theme_pattern.svg";
import mywork_data from "../../assets/Assets/mywork_data.js";
import arrow_icon from '../../assets/Assets/arrow_icon.svg'
const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {/* {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })} */}

        {mywork_data.map((work, index) => (
    <div key={index} className="work-item">
      <img 
        src={work.w_img} 
        alt={work.w_name} 
        className="work-image" 
      />
      {work.github_link && (
        <a
          href={work.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
      )}
    </div>
  ))}
      </div>

    {showMore ? (
        <div className="show-less-container">
          <p className="upcoming-projects-message">Currently working on new projects. New projects will be added soon.</p>
          <div 
            className="mywork-showmore" 
            onClick={() => setShowMore(false)}
          >
            <p>Show Less</p>
            <img src={arrow_icon} alt="" style={{ transform: 'rotate(180deg)' }} />
          </div>
        </div>
      ) : (
        <div 
          className="mywork-showmore"
          onClick={() => setShowMore(true)}
        >
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
      </div> 
  );
};

export default MyWork;
