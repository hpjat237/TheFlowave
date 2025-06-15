import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/LOGO-5.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELVES
            </h1>
            <p className="home-about-body">
                <b className="purple"> THE FLOWAVE MEDIA </b> hướng tới trở thành một tổ chức hàng đầu trong lĩnh vực truyền thông xã hội tại khu vực,
              thúc đẩy xây dựng thương hiệu cá nhân và phát triển kỹ năng truyền thông cho thế hệ trẻ.
              <br />
              <i>
                <br />Bắt đầu từ một nhóm bạn trẻ nhiệt huyết,
                <br />
              </i>
              <br />
              <b className="purple"> THE FLOWAVE MEDIA </b> đặt mục tiêu phát triển thành một câu lạc bộ năng động, 
              tiến tới hình thành một công ty truyền thông chuyên nghiệp,
              đáp ứng nhu cầu ngày càng tăng của xã hội về xây dựng hình ảnh cá nhân và thương hiệu số. &nbsp;
              <br />
              <br />
              Với sứ mệnh mang lại giá trị cho cộng đồng,
              <br />
              <br />
              <b className="purple"> THE FLOWAVE MEDIA </b> 
              cung cấp các dịch vụ đa dạng từ quản lý mạng xã hội, thiết kế đồ họa, sản xuất video đến phát triển web,
              nhằm mang lại giá trị tối ưu cho khách hàng và cộng đồng.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61577247721065"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@capcumcup"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
