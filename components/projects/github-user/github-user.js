import { Col, Divider, Image, Row } from "antd";

export default function GithubUser() {
    return (
        <div>
            <p>Made an Android Mobile Application for Dicoding Certification (Belajar Fundamental Aplikasi Android - <a href="https://www.dicoding.com/certificates/RVZK41G1EPD5" target="_blank">Certificate</a>)</p>

            <Divider />

            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image src="/images/github-users/GithubUsers.gif" />
                </Col>
            </Row>

            <Divider orientation="left" plain>
                Favourite User
            </Divider>

            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image src="/images/github-users/fav-users.png" />
                    <p>Display the list of favourite users and able to add and remove user from the list.</p>
                </Col>
            </Row>

            <Divider orientation="left" plain>
                Search User
            </Divider>

            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image src="/images/github-users/search-user.png" />
                    <p>Able to search user using the github API.</p>
                </Col>
            </Row>

            <Divider orientation="left" plain>
                User Detail
            </Divider>

            <Row gutter={[16, 32]}>
                <Col xs={24} lg={24} >
                    <Image src="/images/github-users/detail-user.png" />
                    <p>Able to see user details, followers and following other github users using the github API.</p>
                </Col>
            </Row>

        </div>
    );
}