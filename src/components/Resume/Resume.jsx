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
import { faCss3Alt, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";

import "./Resume.css";

export default function Resume() {
  return (
    <div style={{ width: "50%", border: "1px solid black", margin: "0 auto" }}>
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
                        <FontAwesomeIcon icon={faJs} />
                      </div>
                      <span>JavaScript</span>
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
                        <FontAwesomeIcon icon={faHtml5} />
                      </div>
                      <span>HTML</span>
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
              <Typography variant="h6" id="bold2">
                Objective
              </Typography>
            </div>
            <Typography variant="body1">
              As a passionate and detail-oriented junior software engineer, I am
              dedicated to crafting efficient and innovative solutions to
              real-world challenges. With a solid foundation in programming and
              a commitment to lifelong learning, I bring enthusiasm and
              adaptability to every project. I am eager to collaborate with
              experienced teams and contribute my technical skills to drive
              successful software development initiatives.
            </Typography>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <Typography variant="h6" id="bold2">
                Work Experience
              </Typography>
            </div>
            <ul className="work">
              <li>
                <div className="date">2018 - 2023</div>
                <div className="info">
                  <Typography variant="h6" style={{ fontSize: "16px" }}>
                    Senior Field Technician
                  </Typography>
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
              <Typography variant="h6" id="bold2">
                Education
              </Typography>
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
              <Typography variant="h6" id="bold2">
                Hobbies
              </Typography>
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
                <FontAwesomeIcon
                  icon={faGamepad}
                  style={{ fontSize: "25px" }}
                />
              </li>
            </ul>
            <ul>
              <div className="hobbies-circle-wrap">
                <FontAwesomeIcon
                  icon={faMotorcycle}
                  style={{ fontSize: "24px" }}
                />
              </div>
              <div className="hobbies-circle-wrap">
                <FontAwesomeIcon
                  icon={faDumbbell}
                  style={{ fontSize: "24px" }}
                />
              </div>
              <div className="hobbies-circle-wrap">
                <FontAwesomeIcon
                  icon={faPersonSnowboarding}
                  style={{ fontSize: "24px" }}
                />
              </div>
              <div className="hobbies-circle-wrap">
                <FontAwesomeIcon
                  icon={faGamepad}
                  style={{ fontSize: "24px" }}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
