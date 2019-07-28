import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { indigoA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';

export default class Benefits extends Component{
    render(){
        return (
            <ul>
                <Card className="Header-benefit">
                    <CardText>
                    <div className="row">
                        <div className="Header-benefit-image" style={{ 'backgroundColor': indigoA400 }}>
                        <img src={process.env.PUBLIC_URL + 'images/heart.png'} alt=""/>
                        </div>
                        <div className="Header-benefit-content">
                        <h3>Calificaciones con emociones</h3>
                        <p>Calificaca tus lugares con experiencias, no con números</p>
                        </div>
                    </div>
                    </CardText>
                </Card>
                <Card className="Header-benefit">
                    <CardText>
                    <div className="row">
                        <div className="Header-benefit-image" style={{ 'backgroundColor': lightBlueA400 }}>
                        <img src={process.env.PUBLIC_URL + 'images/heart.png'} alt=""/>
                        </div>
                        <div className="Header-benefit-content">
                        <h3>¿Sin Internet? Sin problemas</h3>
                        <p>Places funciona sin internet o en conexiones lentas</p>
                        </div>
                    </div>
                    </CardText>
                </Card>
                <Card className="Header-benefit">
                    <CardText>
                    <div className="row">
                        <div className="Header-benefit-image" style={{ 'backgroundColor': amberA400 }}>
                        <img src={process.env.PUBLIC_URL + 'images/heart.png'} alt=""/>
                        </div>
                        <div className="Header-benefit-content">
                        <h3>Tus lugares favoritos</h3>
                        <p>Define tu lista de sitios favoritos</p>
                        </div>
                    </div>
                    </CardText>
                </Card>
            </ul>
        );
    }
}