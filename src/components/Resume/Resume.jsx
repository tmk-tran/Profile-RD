import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSignsPost,
  faUserGear,
  faUserGroup,
  faComputer,
  faLightbulb,
  faComments,
  faMotorcycle,
  faDumbbell,
  faPersonSnowboarding,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faHtml5,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <Typography variant="h5">Resume Info Here</Typography>
      <div className="resume">
        <div className="resume_left">
          <div className="resume_profile"></div>

          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold1">T Mark Schisel</p>
                <p className="regular"></p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faSignsPost} />
                  </div>
                  <div className="data">Fargo, ND 58104</div>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="data">(701)720-9789</div>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="data">tmk1.tran@gmail.com</div>
                </li>
              </ul>
              <div className="resume_item resume_skills"></div>
              <div className="title">
                <p className="bold2">Skills</p>
              </div>

              <div className="skills">
                <ul>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faUserGear} />
                      </div>
                      <span>Adaptability</span>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faUserGroup} />
                      </div>
                      <span>Teamwork</span>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faHtml5} />
                      </div>
                      <span>HTML</span>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faCss3Alt} />
                      </div>
                      <span>CSS</span>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faPython} />
                      </div>
                      <span>Python</span>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faComputer} />
                      </div>
                      <span>Windows and MacOS</span>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faLightbulb} />
                      </div>
                      <span>Innovative</span>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="icon">
                        <FontAwesomeIcon icon={faComments} />
                        <i className="fa-solid fa-comments"></i>
                      </div>
                      <span>Communication</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold2">Objective</p>
            </div>
            <p>
              Highly motivated and enthusiastic individual seeking to enroll in
              the Software Engineering program at Emerging Digital Academy.
              Looking for a supportive educational structure to develop a solid
              foundation in programming and software development. Eager to learn
              from leading experts in the field and to develop the skills and
              knowledge necessary to start a new career as a successful Software
              Engineer.
            </p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold2">Work Experience</p>
            </div>
            <ul className="work">
              <li>
                <div className="date">2018 - present</div>
                <div className="info">
                  <p className="semi-bold">Senior Field Technician</p>
                  <p>Twin City Garage Door/API Group (West Fargo, ND)</p>
                </div>
              </li>
            </ul>

            <ul className="duties">
              <li>
                <div className="work_info">
                  <p>
                    Supervise and direct a team of employees to accomplish
                    project objectives, consistently ahead of deadlines
                  </p>
                </div>
              </li>

              <li>
                <div className="work_info">
                  <p>
                    Engineer customized solutions to unique challenges faced
                    during project installation
                  </p>
                </div>
              </li>

              <li>
                <div className="work_info">
                  <p>Coordinate with team members to meet daily demands</p>
                </div>
              </li>

              <li>
                <div className="work_info">
                  <p>
                    Utilize organizational skills and a methodical approach to
                    deliver quality and time-efficient results
                  </p>
                </div>
              </li>

              <li>
                <div className="work_info">
                  <p>
                    Improved sales operations with feedback from customers and
                    personal observations on methods for better capitalizing on
                    sales opportunities
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold2">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">2011</div>
                <div className="info">
                  <p className="semi-bold">North Dakota State University</p>
                  <p>Bachelor of Science, Psychology</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_hobbies">
            <div className="title">
              <p className="bold2">Hobbies</p>
            </div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMotorcycle} />
              </li>
              <li>
                <FontAwesomeIcon icon={faDumbbell} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPersonSnowboarding} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGamepad} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
