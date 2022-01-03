import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };
      
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        validate(firstName, lastName, phoneNum, email) {

            const errors = {
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: ''
            };
        //what is this validate and const errors for

    if (this.state.touched.firstName) {
        if (firstName.length < 2) {
            errors.firstName = 'First name must be at least 2 characters.';
        } else if (firstName.length > 15) {
            errors.firstName = 'first name must be 15 or less characters.';
        }
    }
    if (this.state.touched.lastName) {
        if (lastName.length < 2) {
            errors.lastName = 'last name must be at least 2 characters.';
        } else if (lastName.length > 15) {
            errors.lastName = 'last name must be 15 or less characters.';
        }
    }  
    const reg = /^\d+$/;
    if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }
    if (this.state.touched.email && !email.includes('@')) {
        errors.email = 'Email should contain @ @';
    }
    return errors;
    //what is this return errors returing?


    }
    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })
//what is the (field) using for
//what is ...this refering of object
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        //how is ths haldeInputChange rendering the output?
        //why defining const target = evet.target and const name = target.name
        // what is this targget.value using for if does not check target..checked.
    
        this.setState({
            [name]: value
        }); 

        //what is ths setState of [name]: value refering 
        //I undertstand that this is using hadlling mutlitple inputs  what is that for, why do I use this bracked [name} here]
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
        //what does this JSOn.stringify do here 
        //what does this event prentDefalut do?
    }
        render() {
            const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);    
            /// this const errors?
            return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>Contact Us</h2>
                                <hr />
                            </div>
                        </div>

                        <div className="row row-content">
                            <div className="col-12">
                                <h2>Send us your Feedback</h2>
                                <hr />
                            </div>
                            <div className="col-md-10">
                                <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        invalid={errors.phoneNum}
                                        onBlur={this.handleBlur("phoneNum")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 4, offset: 2}}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox"
                                                        name="agree"
                                                        checked={this.state.agree}
                                                        onChange={this.handleInputChange} /> {' '}
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <Input type="select" name="contactType"
                                                    value={this.state.contactType}
                                                    onChange={this.handleInputChange}>
                                                <option>By Phone</option>
                                                <option>By Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                        <Col md={10}>
                                            <Input type="textarea" id="feedback" name="feedback"
                                                rows="12"
                                                value={this.state.feedback}
                                                onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
            );
    }         
}


export default Contact;