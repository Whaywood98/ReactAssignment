import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return (
            <>
            <div>
                <Button type="button" onClick={this.toggleModal}>Submit Comment</Button>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" name="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option> 
                            </Control.select>                          
                            </FormGroup>
                            <FormGroup>
                                <div>
                                <Label htmlFor="name">Name</Label>
                                <Control.text model=".name" name="name"
                                    placeholder="Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 character of less'
                                        }}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" name="comment"
                                    className="form-control"
                                    placeholder="Your Comment"
                                />
                            </FormGroup>
                            <Button type="submit" color="primary" > Submit Comment</Button>
                    </LocalForm>
                    </ModalBody>
                </Modal>
                </>
            );
    }

}
export default CommentForm;