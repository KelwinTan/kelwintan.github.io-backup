import MainLayout, { siteTitle } from "../components/main-layout";
import { Button, Card, Col, Drawer, Image, Row, Tag } from 'antd';
import Head from 'next/head';
import { CodeOutlined, FireOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, SearchOutlined, YoutubeOutlined } from "@ant-design/icons";
import { useState } from "react";
import Bjora from "../components/projects/bjora/bjora";
import portfolioStyles from "../styles/Portfolio.module.css";
import GithubUser from "../components/projects/github-user/github-user";

export default function Portfolio() {
    const [bjoraVisible, setBjoraVisible] = useState(false);
    const [githubUserVisible, setGithubUserVisible] = useState(false);

    const onShowBjora = () => {
        setBjoraVisible(true);
    }

    const onCloseBjora = () => {
        setBjoraVisible(false);
    }

    const onShowGithubUser = () => {
        setGithubUserVisible(true);
    }

    const onCloseGithubUser = () => {
        setGithubUserVisible(false);
    }


    return (
        <MainLayout>
            <Head>
                <title>{siteTitle}{' - Portfolio'}</title>
            </Head>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Portfolio</h1>
                <Drawer
                    width={"40%"}
                    placement={"right"}
                    title="Bjora Forum"
                    onClose={onCloseBjora}
                    visible={bjoraVisible}>
                    <Bjora />
                </Drawer>

                <Drawer
                    width={"40%"}
                    placement={"right"}
                    title="Github User"
                    onClose={onCloseGithubUser}
                    visible={githubUserVisible}>
                    <GithubUser />
                </Drawer>


                <div>
                    <Row gutter={[16, 32]}>
                        <Col xs={24} lg={8}>
                            <Card title="Bjora Forum"
                                bordered={true}
                                cover={
                                    <Image height="300px" src="/images/bjora/admin.gif" />
                                }
                            >
                                <Row gutter={[16, 32]}>
                                    <Col xs={24} lg={8} style={{ display: 'flex', margin: 'auto', justifyContent: 'center', fontSize: '30px' }}>
                                        <Tag color="processing">Laravel</Tag>
                                    </Col>
                                    <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
                                        <a href="https://github.com/KelwinTan/Bjora" target="_blank"><GithubOutlined /></a>
                                    </Col>
                                    <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
                                        <Button style={{ margin: 'auto' }} type="primary" ghost onClick={onShowBjora}><SearchOutlined /></Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Card title="Crystal Report"
                                bordered={true}
                                cover={
                                    <iframe height="300px" style={{ marginBottom: "5px" }} src="https://www.youtube.com/embed/rUbFtqpN5J0" title="YouTube video player"></iframe>
                                }
                            >
                                <Row gutter={[16, 32]}>
                                    <Col xs={24} lg={12} style={{ display: 'flex', margin: 'auto', justifyContent: 'center', fontSize: '30px' }}>
                                        <Tag color="processing">ASP.NET</Tag>
                                    </Col>
                                    <Col xs={24} lg={12} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
                                        <a href="https://youtu.be/rUbFtqpN5J0" target="_blank"><YoutubeOutlined /></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Card title="Github User - Dicoding Certification"
                                bordered={true}
                                cover={
                                    <Image height="300px" src="/images/github-users/github-users-certif.png" />
                                }
                            >
                                <Row gutter={[16, 32]}>
                                    <Col xs={24} lg={8} style={{ display: 'flex', margin: 'auto', justifyContent: 'center', fontSize: '30px' }}>
                                        <Tag color="processing">Kotlin</Tag>
                                    </Col>
                                    <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
                                        <a href="https://github.com/KelwinTan/GithubUser" target="_blank"><GithubOutlined /></a>
                                    </Col>
                                    <Col xs={24} lg={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
                                        <Button style={{ margin: 'auto' }} type="primary" ghost onClick={onShowGithubUser}><SearchOutlined /></Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </MainLayout>
    );
}