import React from 'react';
// import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
// Styles
import '../styles/style.css'
// import { skills, light, lighttitle } from '../styles/project.module.scss'

const project0 = ({ project }) => {

  return (
    <>
      {/* <Typography><Title className="line">ZAP App</Title></Typography> */}
      <Row>
        <Col span={24}>
          <h3>{project.blurb}</h3>
        </Col>
        <Col span={24}>

          <p>{project.description}
          </p>
          <h4>Technologies Used:</h4>

          <ul>
            {project.technology.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>

        </Col>
      </Row>
    </>
  )
}

export default project0