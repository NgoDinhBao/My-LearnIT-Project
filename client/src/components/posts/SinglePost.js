import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ActionButtons from "./ActionButtons";

SinglePost.propTypes = {};

function SinglePost({ post: { _id, status, title, description, url } }) {
  const borderCls =
    status === "LEARNED"
      ? "success"
      : status === "LEARNING"
      ? "warning"
      : "danger";
  const des = description ? description : title;
  return (
    <Card className="shadow" border={borderCls}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <p className="post-title">{title}</p>
              <Badge pill bg={borderCls}>
                {status}
              </Badge>
            </Col>
            <Col className="text-right">
              <ActionButtons url={url} _id={_id} />
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>{des}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SinglePost;
