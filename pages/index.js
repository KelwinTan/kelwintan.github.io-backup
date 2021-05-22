import React from 'react';
import MainLayout from '../components/main-layout';
import { Card, Row, Col, Divider } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import "../styles/Home.module.css";

export default function Home() {
  const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
  };

  return (
    <MainLayout home>
      <Card title="My Information" bordered={false} style={{ width: '100%', fontSize: '18px'}}>
        <h2>Kelwin Tantono</h2>
        <p className="description-text">Software Engineer</p>
        <p>Jakarta, Indonesia</p>
        
        <Divider orientation="left" plain>
          About
        </Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>

        <Divider />

        <Card title="Skills">
            <Card.Grid style={gridStyle}>React.JS</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Laravel</Card.Grid>
            <Card.Grid style={gridStyle}>PHP</Card.Grid>
            <Card.Grid style={gridStyle}>Java</Card.Grid>
            <Card.Grid style={gridStyle}>C</Card.Grid>
            <Card.Grid style={gridStyle}>C++</Card.Grid>
            <Card.Grid style={gridStyle}>Python</Card.Grid>
            <Card.Grid style={gridStyle}>Javascript</Card.Grid>
          </Card>
          
          <Divider />

          <Row gutter={[16, 32]}>
            <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize:'30px'}}>
              <a href="mailto:lw.kelwin@gmail.com"><MailOutlined /></a>
            </Col>
            <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize:'30px'}}>
              <a href="https://github.com/KelwinTan" target="_blank"><GithubOutlined /></a>
            </Col>
            <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize:'30px'}}>
              <a href="https://linkedin.com/in/kelwintantono" target="_blank"><LinkedinOutlined /></a>
            </Col>
          </Row>
      </Card>
        
    </MainLayout>
  )
}
