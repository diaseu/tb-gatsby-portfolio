import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Project from '../components/project'
// import './modalstyle.css'
// Styles
// import 'antd/dist/antd.css'
// import { skills, light } from '../styles/project.module.scss'


const ModalComponent = ({ project }) => {

  const [visible, setVisible] = useState(false);

  return (
    <div key={project.id}>
      {/* <Button onClick={() => setVisible(true)}>Show Project {project.id}</Button> */}
      <div onClick={() => setVisible(true)}>
        <h4>{project.name}</h4>
        <img src={project.img} alt={project.name} style={{ width: '100%', margin: '0 0 2vh 0' }} />
        <p style={{ margin: '0 0 22px 0' }}>
          {project.blurb}
        </p>
      </div>
      <Modal
        title={project.name}
        // centered
        visible={visible}
        style={{ top: '10vh' }}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={[
          <a href={project.url} target="_blank" re="noreferrer"><Button key="site"> 
            See Live Site
          </Button></a>,
          <a href={project.git} target="_blank" re="noreferrer"><Button key="git">
            See Git Repo
          </Button></a>,
          <Button key="back" onClick={() => setVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <img
          alt={project.name}
          src={project.img}
          style={{ width: '100%', margin: '0 0 0vh 0' }}
        />
        {/* {project.description} */}
        <Project project={project} />

      </Modal>
    </div>
  )
}

export default ModalComponent