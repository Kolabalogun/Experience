import React from "react";
import Jobs from "./JobsArray";
import "./Style.css";

const Home = () => {
  const [JobArray, JobArrayF] = React.useState(Jobs);
  const [value, valueF] = React.useState(0);

  const { title, id, dates, duties, company } = JobArray[value];

  const duty = duties.map((d, index) => (
    <p key={index} className="roles">
      {d}
    </p>
  ));
  const companybtn = JobArray.map((d, index) => (
    <button key={index} className = {index === value ? "active" : "false"} onClick={() => handClick(index)}>
      {d.company}
    </button>
  ));

  function handClick(id) {
    valueF(id);
  }

  return (
    <div className="container">
      <h1>Experience</h1>
      <div className="line"></div>

      <div className="main">
        <div className="company">{companybtn}</div>
        <div className="jobs">
          <p className="head">{title}</p>
          <p className="title">{company}</p>
          <p>{dates}</p>

          {duty}
        </div>
      </div>
    </div>
  );
};

export default Home;
