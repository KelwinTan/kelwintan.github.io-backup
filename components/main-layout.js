import React, { useState } from 'react';
import Head from 'next/head'
import styles from './main-layout.module.css'
import Link from 'next/link'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

const name = 'Kelwin Tantono'
export const siteTitle = 'Kelwin Tantono'

export default function MainLayout({ children, home }) {
    const { Header, Content, Footer, Sider } = Layout;
    const [collapse, setCollapse] = useState(false);

    const onCollapse = () => {
        setCollapse(!collapse);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Kelwin Tantono"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link href="/">Kelwin Tantono</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Portfolio
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FileOutlined />}>
                        <Link href="/work-experience">Work Experience</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}
