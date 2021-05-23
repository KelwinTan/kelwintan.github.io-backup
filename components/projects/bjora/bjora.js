import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { Col, Divider, Image, Row } from "antd";

export default function Bjora() {
    return (
        <div>
            <p>Made a replica like <a href="https://stackoverflow.com/" target="_blank">Stackoverflow</a> using Laravel (Full Stack).
            </p>

            <Divider />

            <p>Admin Dashboard</p>
            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image height="300px" src="/images/bjora/admin.gif" />
                    <p>Admin can do CRUD operations on Users, Questions and Topics data.</p>
                </Col>
            </Row>

            <Divider orientation="left" plain>
                Database
            </Divider>

            <p>MySQL Database</p>
            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image height="300px" src="/images/bjora/databasedesign.jpg" />
                    <p>Used php artisan migrate as the Database Migration Tool.</p>
                </Col>
            </Row>

            <Divider />

            <p>Inbox Messages</p>
            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image height="300px" src="/images/bjora/inbox.gif" />
                    <p>User can send messages to other users and those messages will appear in the recipient's inbox. Users can delete and view the messages in their message inbox.</p>
                </Col>
            </Row>

            <Divider />

            <p>Questions</p>
            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image height="300px" src="/images/bjora/question.gif" />
                    <p>Users can ask questions and give the topic for each question. The questions asked will appear in the home page of the Bjora Forum.</p>
                </Col>
            </Row>

        </div>
    );
}