import React from 'react';
import MainLayout, { siteTitle } from '../components/main-layout';
import { Card, Row, Col, Divider } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import "../styles/Home.module.css";
import Head from 'next/head';

export default function Home() {
  const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
  };

  return (
    <MainLayout home>
      <Head>
        <title>{siteTitle}{' - Info'}</title>
      </Head>
      <Card title="My Information" bordered={false} style={{ width: '100%', fontSize: '18px', marginTop: '20px' }}>
        <h2>Kelwin Tantono</h2>
        <p className="description-text">Software Engineer</p>
        <p>Based in: Jakarta, Indonesia (Open to relocation if sponsored)</p>

        <Divider orientation="left" plain>
          About
        </Divider>
        <p>
          I am currently working as a Network Administrator and Technical Support Officer in Binus University. I also work as a Freelance Web Developer (currently using React JS + Laravel).
        </p>
        <p>
          I am passionate in programming and have been learning on new technologies in the field of Web Development and Mobile Development. I am looking forward to focus on Backend Development and learn the best practices in developing an API for a website or a mobile application to consume.
        </p>

        <Divider orientation="left" plain>
          Skills
        </Divider>

        <Card>
          <Card.Grid style={gridStyle}>React.JS</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Laravel</Card.Grid>
          <Card.Grid style={gridStyle}>PHP</Card.Grid>
          <Card.Grid style={gridStyle}>Java</Card.Grid>
          <Card.Grid style={gridStyle}>C++</Card.Grid>
          <Card.Grid style={gridStyle}>Kotlin</Card.Grid>
          <Card.Grid style={gridStyle}>Python</Card.Grid>
          <Card.Grid style={gridStyle}>Javascript</Card.Grid>
        </Card>

        <Divider orientation="left" plain>
          Contact
        </Divider>

        <Row gutter={[16, 32]}>
          <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
            <a href="mailto:lw.kelwin@gmail.com"><MailOutlined /></a>
          </Col>
          <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
            <a href="https://github.com/KelwinTan" target="_blank"><GithubOutlined /></a>
          </Col>
          <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
            <a href="https://linkedin.com/in/kelwintantono" target="_blank"><LinkedinOutlined /></a>
          </Col>
        </Row>
      </Card>

    </MainLayout>
  )
}
