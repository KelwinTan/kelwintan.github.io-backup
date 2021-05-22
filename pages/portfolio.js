import MainLayout from "../components/main-layout";
import { Card, Col, Row } from 'antd';

export default function Portfolio() {
    return (
        <MainLayout>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h1 style={{textAlign:'center', fontSize:'30px'}}>Portfolio</h1>
                <div>
                    <Row gutter={[16, 32]}>
                        <Col xs={24} lg={8}>
                            <Card title="Card title" bordered={true}>
                            Card content
                            </Card>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Card title="Card title" bordered={true}>
                            Card content
                            </Card>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Card title="Card title" bordered={true}>
                            Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </MainLayout>
    );
}