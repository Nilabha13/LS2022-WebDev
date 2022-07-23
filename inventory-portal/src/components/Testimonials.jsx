import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UICard from "./UICard";

class Testimonials extends Component {
  render() {
    return (
      <>
        <section className="p-5 bg-warning">
          <Container>
            <h2 className="text-center">Testimonials</h2>
            <Row xs={1} md={3} className="g-4">
              <Col>
                <UICard
                  title="Lucifer Morningstar"
                  imgsrc="https://randomuser.me/api/portraits/men/1.jpg"
                >
                  Best inventory portal ever!
                </UICard>
              </Col>
              <Col>
                <UICard
                  title="Chloe Decker"
                  imgsrc="https://randomuser.me/api/portraits/women/67.jpg"
                >
                  This portal simplified my whole life!
                </UICard>
              </Col>
              <Col>
                <UICard
                  title="Daniel Espinoza"
                  imgsrc="https://randomuser.me/api/portraits/men/53.jpg"
                >
                  Best WebApp on this planet!
                </UICard>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Testimonials;
