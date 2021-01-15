import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';

function RenderDish({dish}) {
        if (dish != null) {
            return (
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                <Card>
                    <CardImg width="100%" top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </FadeTransform>
            );
        } else {
            return (<div></div>);
        }
}

function RenderComments({comments, postComment, dishId}) {
            if (comments != null) {
                const dishComments = comments.map((comment) => {
                    const date = new Date(comment.date);
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>{comment.author}</p>
                            <p>{date.toDateString()}</p>
                        </li>
                    );
                });
                return (
                    <Stagger in>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <h3>Comments</h3>
                                <div>{dishComments}</div>
                                <div>{<CommentForm dishId={dishId} postComment={postComment}/>}</div>
                            </div>
                        </div>
                        </div>
                    </Stagger>
                );
                        }
            else {
                return (
                    <div></div>
                );
            }
}

const MenuDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div clssName="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div clssName="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }        
    else if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        );
    else return null;
}

export default MenuDetail;