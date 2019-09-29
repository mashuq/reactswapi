import './Starship.css';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import loadStarships  from './starshipData';
import { bindActionCreators } from 'redux';

function Starship(props) {
    useEffect(() => {
        props.loadData();
    }, [])
    return (
        <div className="Starship">
            <header className="Starship-header">
            {props.list.map((value, index) => {
                return StarshipList(value);
            })}
            </header>
        </div>
    );
}

function StarshipList(props){
    return (
    <div>
        <span>{props.name}|</span>
        <span>{props.model}|</span>
        <span>{props.starship_class}|</span>        
    </div>
    );
}

const mapStateToProps = function (state) {
    return {
        list: state.starshipReducer.list,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadData: loadStarships
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Starship);
