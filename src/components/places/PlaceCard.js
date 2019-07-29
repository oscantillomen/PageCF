import React, { Component } from 'react';
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import { FlatButton} from 'material-ui/FlatButton';
import { CSSTransition } from 'react-transition-group';

export default class PlaceCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            show: true
        }
    }
    render(){
        return(
            <CSSTransition classNames='fade-scale' in={this.props.in}>
                <div className="col-xs-12 col-md-4" key={this.props.index}>
                    <Card>
                        <CardMedia>
                            <img src={process.env.PUBLIC_URL + this.props.place.imageUrl } alt=""/>
                        </CardMedia>
                        <CardTitle title={this.props.place.title}></CardTitle>
                        <CardText>{this.props.place.description}</CardText>
                        <CardActions>
                            <FlatButton secondary={true} label='Ver más'></FlatButton>
                            <FlatButton secondary={true} label='Ocultar' onClick={() => this.props.onRemove(this.props.place)}></FlatButton>
                        </CardActions>
                    </Card>
                </div>
            </CSSTransition>
        );
    }
}
