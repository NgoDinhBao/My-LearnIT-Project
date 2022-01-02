import { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/Spinner";
import AddPostModal from "../components/posts/AddPostModal";
import SinglePost from "../components/posts/SinglePost";
import { AuthContext } from "../contexts/AuthContext";
import { PostContext } from "../contexts/PostContext";

Dashboard.propTypes = {};

function Dashboard(props) {
  //Contexts
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);

  const {
    postState: { posts, postLoading },
    getPosts,
  } = useContext(PostContext);

  useEffect(() => getPosts(), []);
  let body = null;

  if (postLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (posts.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to Learn IT</Card.Title>
            <Card.Text>
              Click the button below to track your first skill to learn
            </Card.Text>
            <Button variant="primary">LearnIT!</Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          {posts.map((post) => (
            <Col key={post._id} className="my-2">
              <SinglePost post={post}/>
            </Col>
          ))}
        </Row>
      </>
    );
  }

  return (
    <>
      {body}
      <AddPostModal/>
    </>
  );
}

export default Dashboard;
