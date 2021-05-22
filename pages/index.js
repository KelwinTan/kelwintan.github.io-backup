import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link'
import MainLayout from '../components/main-layout';

export default function Home() {
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <MainLayout home>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h1>Kelwin Tantono</h1>
      </div>
    </MainLayout>
  )
}
