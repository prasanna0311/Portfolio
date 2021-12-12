import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="./images/prasanna.jpg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>PRASANNA BALAJI</strong>. I am a graduate student in the Department of Mechanical Engineering at the K Ramakrishnan College Of Engineering at Trichy graduating in Sep 2020.
             I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.

            
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following Technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
