import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem,
        Button, Modal, ModalHeader, ModalBody, Label, Col, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';





const required = val => val && val.length;
const maxLength = len => val => !(val) || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isModalOpen: false, 
      }

      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
      this.setState({
          isModalOpen: !this.state.isModalOpen
      });
  }
  //!this.state.isModalOpen can substitue as True

  handleSubmit(values) {
      console.log("handle Submit")
      console.log({values})
      this.toggleModal();
      //why this this.toggleModel is not using here and works perfectly fine when 3: Exercise Redux Actions
     this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
  }

  render() {

    return (
        <div>
            <Button outline color="secondary" onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" /> 
            Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>

                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <div className="form-group">
                           <Label htmlFor="rating" md={12}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating"
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, 
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                               <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        // required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                /> 
                            </Col>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="text" md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".text" id="text" name="text"
                                    rows="6"
                                    className="form-control"
                                />
                            </Col>
                        </div>
                        <div className="form-group">
                            <Col md={12}>
                                <Button  type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </div>
                    </LocalForm>

                </ModalBody>
            </Modal >

        </div >
    );
}
}


function RenderCampsite({campsite}) {
  return (
    <div className="col-md-5 m-1">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
  );
}

function RenderComments({comments, postComment, campsiteId}) {
    return (
    <div className="col-md-5 m-1">
     <h4>Comments</h4>
                <Stagger in>
                    {
                        comments.map(comment => {
                            return (
                                <Fade in key={comment.id}>
                                    <div>
                                        <p>
                                            {comment.text}<br />
                                            -- {comment.author}, 
                                            {new Intl.DateTimeFormat
                                            ('en-US', { year: 'numeric',
                                             month: 'short', day: '2-digit'}).format
                                            (new Date(Date.parse(comment.date)))}
                                        </p>
                                    </div>
                                </Fade>
                            );
                        })
                    }
                </Stagger>
      <CommentForm campsiteId = {campsiteId} postComment={postComment}/>
    </div>
  );
}

function CampsiteInfo(props) {
    console.log("Break point 2")
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }    
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments 
                        comments={props.comments}
                        postComment={props.postComment}
                        campsiteId={props.campsite.id}
                    />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;