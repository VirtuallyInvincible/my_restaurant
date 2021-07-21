import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody,
         CardTitle, CardText, Button, Modal, ModalHeader, 
         ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderDish({dish}) {
    return (
      <div className="col-12 col-md-50 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.image}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
}

function RenderComments({comments, addComment, dishId}) {
    if (comments != null) {
        return (
          <div className="col-12 col-md-50 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {comments.map((comment) => {
                return (
                  <li key={comment.id}>
                    <p>Rating: {comment.rating}</p>
                    <p>{comment.comment}</p>
                    <p>Written by: {comment.author}</p>
                    <p>Date: {comment.date}</p>
                  </li>
                );
              })}
            </ul>
            <CommentForm dishId={dishId} addComment={addComment} />
          </div>
        );
    } else {
        return (
          <div></div>
        );
    }
}

const minLength = (len) => (val) => (val && val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleSubmit(values) {
        // TODO: Comments are not saved. Refreshing the page deletes them.
        // TODO: Space up different comments and reduce spaces between lines of the same comment.
        // TODO: Convert date to human-readable format
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return(
          <div>
            <Button onClick={this.toggleModal}>
              Write a Review
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Submit</ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <Row className="form-group">
                    <Col>
                      <Label htmlFor="rating">Rating</Label>
                      <br />
                      <Control.select model=".rating" 
                                      id="rating">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col>
                      <Label htmlFor="author">Author</Label>
                      <br />
                      <Control.text model=".author" 
                                    id="author"
                                    validators={{
                                      minLength: minLength(2)
                                    }}
                                    />
                      <Errors className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                minLength: "The author name must be at least 2 characters long."
                              }}
                              />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col>
                      <Label htmlFor="comment">Comment</Label>
                      <br />
                      <Control.textarea model=".comment"
                                        id="comment"
                                        rows="10"
                                        />
                    </Col>
                  </Row>
                  <Button type="submit">
                    Submit
                  </Button>
                </LocalForm>
              </ModalBody>
            </Modal>
          </div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
              </div>
              <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments}
                                addComment={props.addComment}
                                dishId={props.dish.id}
                                />
              </div>
            </div>
          </div>
        )
    }
}

export default DishDetail;