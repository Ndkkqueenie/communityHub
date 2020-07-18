import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = {
          isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSignup(event) {
      this.toggleModal();
      alert("Username: " + this.username.value + " E-mail: " + this.remember.email
        + " Password: " + this.password.value
        );
      event.preventDefault();
    }

    render(){
        return(
            <div className='container'>
                <div className='home-box'>
                    <h2>Teamwork</h2>
                    <p>Teamwork is an internal social network for employees of an organisation. 
                        The goal of this application is to facilitate more interaction between colleagues and promote team bonding.
                    </p>
                    <div>
                        <Button type="submit" value="submit" style={{marginRight: 20}} color="primary">Learn more</Button>
                        <span><span></span></span>
                        <Button outline onClick={this.toggleModal} color="primary">Register</Button>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor="username">Full Name</Label>
                                <Input type="text" id="username" name="username"
                                   innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">E-mail</Label>
                                <Input type="text" id="email" name="email"
                                   innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign Up</Button>
                        </Form>
                    </ModalBody>
            </Modal>
            </div>
        );
    }
}

export default Home;