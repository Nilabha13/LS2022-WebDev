import { Component } from "react";
import Card from "react-bootstrap/Card";

class UICard extends Component {
  render() {
    return (
      <Card>
        <Card.Body className="text-center">
          <Card.Img
            src={this.props.imgsrc}
            className="rounded-circle mb-3"
          ></Card.Img>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.children}</Card.Text>
          <a href="#">
            <i class="bi bi-twitter text-dark mx-1"></i>
          </a>
          <a href="#">
            <i class="bi bi-facebook text-dark mx-1"></i>
          </a>
          <a href="#">
            <i class="bi bi-linkedin text-dark mx-1"></i>
          </a>
          <a href="#">
            <i class="bi bi-instagram text-dark mx-1"></i>
          </a>
        </Card.Body>
      </Card>
    );
  }
}

export default UICard;
