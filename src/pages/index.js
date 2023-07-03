import * as React from "react";
import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Row, Col, Card } from "antd";
import { Helmet } from "react-helmet";
import ModalComponent from "../components/ModalComponent";
import "../styles/style.css";

const pageStyles = {
  color: "#232129",
  padding: 60,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const projects = [
  {
    id: 0,
    name: "Dise Design v2",
    blurb: "Personal Portfolio Site v2 for Dia Seung",
    description:
      "Dise Design v2 was a redesign of my personal portfolio site. I wasn't too thrilled with the first iteration and also wanted to explore using new technology, especially Gatsby and SASS, to improve my skills. This portfolio showcases recent projects I've worked on, as well as my contact info. Built on React, Deployed on Netlify",
    url: "https://www.disedesign.com",
    git: "https://github.com/diaseu/disedesign-gatsby",
    img: "https://i.imgur.com/ClXP6wG.png",
    technology: ["Javascript", "React.JS", "Node.JS", "Gatsby", "SASS"],
  },
  {
    id: 1,
    name: "Dise Design v1",
    blurb: "Personal Portfolio Site v1 for Dia Seung",
    description:
      "Dise Design v1 was the first iteration of my personal portfolio site that focused on utilizing ANT Design styling library and React. It showcased recent projects I've worked on, as well as contact info. Built on React, Deployed on Netlify",
    url: "https://silly-brattain-2e84c2.netlify.app/",
    git: "https://github.com/diaseu/disedesign-netlify",
    img: "https://i.imgur.com/xwtIYfG.png",
    technology: ["Javascript", "React.JS", "Node.JS", "Ant Design"],
  },
  {
    id: 2,
    name: "Zap: Bug Tracker",
    blurb:
      "Social bug tracking app, with the ability to crowd-source solutions to issues and questions",
    description:
      "ZAP App is a bug tracking/project management app that innovates on currently existing forms such as Trello or Jira, and give it a social twist.  Zap App gives users the ability to create projects and organize tasks, bugs and issues, and then reach out to the community to crowdsource solutions and answers. Built on MERN stack, deployed on Heroku",
    url: "https://zapbugtracker.herokuapp.com/",
    git: "https://github.com/diaseu/project3",
    img: "https://i.imgur.com/nJf59GQ.png",
    technology: [
      "Javascript",
      "MongoDB",
      "Express",
      "React.JS",
      "Node.JS",
      "Material-UI",
    ],
  },
  {
    id: 3,
    name: "Study Blog",
    blurb:
      "Social blog app where users can post, comment and vote on student-created content",
    description:
      "Study Blog is a student-centered forum website for students to share notes, curated and promoted through voting. Users are able to create rich-text posts chasing any notes and articles related to a specific topic, which are sorted into topic categories. Users can register by creating a username and a password and entering their email address. All passwords are encrypted using passport and jsonwebtoken modules. Users can upvote/downvote or comment on other users' posts. All the user, post, and comment data is saved in an SQL database using the JAWSDB add-on on Heroku. This application allows users to post study material for the following topics:  HTML, Javascript, Node.JS, SQL.  Deployed on Heroku",
    url: "https://studyblog.herokuapp.com/",
    git: "https://github.com/diaseu/studyBlog",
    img: "https://i.imgur.com/43rACDv.png",
    technology: [
      "Javascript",
      "MySQL2",
      "Express",
      "React.JS",
      "Node.JS",
      "Passport",
      "JSON Web Token",
      "Sequelize",
    ],
  },
  {
    id: 4,
    name: "Beleaf Co.",
    blurb: "Online boutique shop specializing in rare tropical plants",
    description:
      "Beleaf Co. is a online boutique shop specializing in sales of rare tropical plants and various related accessories. This started as a personal passion in collecting rare tropical houseplants, which eventually led to sharing the plant love with the local community. COMING SOON ",
    url: "https://www.beleafco.me",
    git: "https://github.com/diaseu?tab=repositories",
    img: "https://i.imgur.com/nJf59GQ.png",
    technology: [
      "Javascript",
      "MongoDB",
      "Express",
      "React.JS",
      "Node.JS",
      "Commerce.JS",
      "Material-UI",
    ],
  },
];

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const items = [
  {
    label: "Home",
    key: "home",
    // icon: <AppstoreOutlined />,
  },
  {
    label: "Illustration",
    key: "illustration",
    // icon: <SettingOutlined />,
  },
  {
    label: "Graphic Design",
    key: "graphic",
    // icon: <MailOutlined />,
  },
  {
    label: "Games",
    key: "games",
    // icon: <MailOutlined />,
  },
  // {
  //   label: "Contact",
  //   key: "Games",
  //   icon: <MailOutlined />,
  // },
];

const IndexPage = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div style={pageStyles}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Kalam"
          rel="stylesheet"
        />
      </Helmet>
      <header class="header">
        <h1>pseudogeny</h1>
        <Menu
          onClick={onClick}
          selectKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </header>
      <main>
        <p style={paragraphStyles}>
          Edit <code style={codeStyles}>src/pages/index.js</code> to see this
          page update in real-time. 😎
        </p>
        <section>
          <h2>
            <small>See My</small> Projects
          </h2>
          <Row>
            {projects.map((project) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
                <Card hoverable className="dark" style={{ width: "100%" }}>
                  <ModalComponent project={project} />
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        <ul style={listStyles}>
          <li style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {docLink.text}
            </a>
          </li>
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
