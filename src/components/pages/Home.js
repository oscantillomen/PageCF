import React, { Component } from 'react';
import RaisedButton from  'material-ui/RaisedButton';

import { indigo400 } from 'material-ui/styles/colors';

import Title from '../Title';
import PlaceCard from '../../components/places/PlaceCard'
import data from '../../request/places';
import Benefits from '../Benefits';

export default class Home extends Component {
    constructor(props){
        super(props);    

        this.state = {
            places: data.places,
        }

        this.hidePlace = this.hidePlace.bind(this);
    }

    places(){
        return this.state.places.map((place, index) => (
            <PlaceCard 
                onRemove = { this.hidePlace  }
                place = { place } 
                key = { index }/> )
        )
    }
    hidePlace(place){
        this.setState({
            places: this.state.places.filter(el => el != place)
        });
    }
    render(){
        return (
            <div className="Header-background">
                <div className="container">
                    <div className="Header-main">
                        <Title></Title>
                        <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                        <img src={process.env.PUBLIC_URL + '/images/train.jpg'} alt="main" className="Header-illustration" />
                    </div>
                    <div>
                        <Benefits/>
                    </div>
                    <div style={{'backgroundColor': indigo400, 'padding': '50px'}}>
                        <h3 style={{'fontSize': '24px'}}>Sitios Populares</h3>
                        <div className="row">
                            {this.places()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}