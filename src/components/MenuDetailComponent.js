import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (<div></div>);
        }
}

function RenderComments({comments}) {
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
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <div>{dishComments}</div>
                            </div>
                        </div>
                    </div>

                );
                        }
            else {
                return (
                    <div></div>
                );
            }
}

const MenuDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    else return null;
}

export default MenuDetail;