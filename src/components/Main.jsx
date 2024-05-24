import React from "react";
import { Avatar, HomeTitle } from "./CompHome.jsx";
import { Major, Job } from "./CompAbout.jsx";
import { TestimonialForm } from "./CompTestimonial.jsx";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faMobile, faServer } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./SectionTitle.jsx";
import { useEffect, useState } from "react";
import Progress from "./Progress.jsx";
import Article from "./Article.jsx";
import Button from "./Button.jsx";
import Project from "./Project.jsx";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchData } from "../commons/apis.js";

export default function Main() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Arrowup />
    </div>
  );
}

/**
 *Home
 */
export function Home() {
  return (
    <div id="home">
      <Avatar src="./img/logo.png" />
      <HomeTitle
        title="Dream Coder"
        name="Hyunsu"
        desc="A software engineer currently residing in Seoul, Republic of Korea"
      />
      <a className="home__contact" href="#contact">
        Contact Me
      </a>
    </div>
  );
}

/**
 * About
 */
export function About() {
  const iList = new Map();
  iList.set("html", faHtml5);
  iList.set("mobile", faMobile);
  iList.set("server", faServer);

  const [aboutList, setAboutList] = useState({});
  useEffect(() => {
    const getFetchData = async () => {
      const url = "data/about.json";
      const result = await fetchData(url);
      await setAboutList(result);
    };
    getFetchData();
  }, []);

  const mlist = aboutList && aboutList.majorList ? aboutList.majorList : [];
  const jlist = aboutList && aboutList.jobList ? aboutList.jobList : [];

  return (
    <div id="about" className="section max-container">
      <SectionTitle
        title={aboutList.title}
        description={aboutList.description}
      />
      <ul className="majors">
        {mlist.map((major) => (
          <li className="major">
            <Major
              icon={iList.get(major.icon)}
              title={major.title}
              desc={major.desc}
            />
          </li>
        ))}
      </ul>
      <ul className="jobs">
        {jlist.map((job) => (
          <Job
            img={job.img}
            alt={job.alt}
            name={job.name}
            period={job.period}
          />
        ))}
      </ul>
    </div>
  );
}

/**
 * my skills
 */
export function Skills() {
  const [skillsList, setSkillsList] = useState({});
  useEffect(() => {
    const getFetchData = async () => {
      const url = "data/skills.json";
      const result = await fetchData(url);
      await setSkillsList(result);
    };
    getFetchData();
    /* fetch("data/skills.json")
      .then((res) => res.json())
      .then((result) => setSkillsList(result))
      .catch((error) => console.log(error)); */
  }, []);

  const properList = skillsList && skillsList.pList ? skillsList.pList : [];
  const tlist = skillsList && skillsList.toolsList ? skillsList.toolsList : [];
  const elist = skillsList && skillsList.etcList ? skillsList.etcList : [];

  return (
    <div id="skill" className="section max-container">
      <SectionTitle
        title={skillsList.title}
        description={skillsList.description}
        content={skillsList.content}
      />
      <div className="skills">
        <div className="skills__coding">
          <h3 className="skill__title">Coding Skills</h3>
          <ul>
            {properList.map((obj) => (
              <li className="bar">
                <Progress name={obj.name} value={obj.value} />
              </li>
            ))}
          </ul>
        </div>
        <Article className="skills__tools" title="Tools" list={tlist} />
        <Article className="skills__etc" title="Etc" list={elist} />
      </div>
    </div>
  );
}

/**
 *MyWork
 */
export function Work() {
  const [workList, setWorkList] = useState({});
  useEffect(() => {
    fetch("data/work.json")
      .then((res) => res.json())
      .then((result) => setWorkList(result))
      .catch((error) => console.log(error));
  }, []);

  const bList = workList && workList.buttonList ? workList.buttonList : [];
  const pList = workList && workList.projectList ? workList.projectList : [];

  return (
    <div id="work" className="section max-container">
      <SectionTitle title="My Work" description="Projects" />
      <ul class="categories">
        {bList.map((obj) => (
          <li>
            <Button className={obj.className} category={obj.category} />
          </li>
        ))}
      </ul>
      <ul className="projects">
        {pList.map((project) => (
          <Project
            image={project.image}
            meta={project.meta}
            number={project.number}
            desc={project.desc}
          />
        ))}
      </ul>
    </div>
  );
}

export function Testimonial() {
  const [testimonialList, setTestimonialList] = useState({});
  useEffect(() => {
    const getFetchData = async () => {
      const url = "data/testimonial.json";
      const result = await fetchData(url);
      await setTestimonialList(result);
    };
    getFetchData();
    /* fetch("data/testimonial.json")
      .then((res) => res.json())
      .then((result) => setTestimonialList(result))
      .catch((error) => console.log(error)); */
  }, []);
  const tList =
    testimonialList && testimonialList.testimonialList
      ? testimonialList.testimonialList
      : [];
  return (
    <div id="testimonial" className="section max-container">
      <SectionTitle
        title="Testimonial"
        description="See what they say about me"
      />
      <ul className="testimonials">
        {tList.map((testimonial) => (
          <li className="testimonial">
            <TestimonialForm testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 *Arrowup
 */
export function Arrowup() {
  return (
    <div>
      <a class="arrow--up" href="#">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}
