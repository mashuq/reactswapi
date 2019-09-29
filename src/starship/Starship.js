import './Starship.css';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loadStarships, storeStarship } from './starshipData';
import { bindActionCreators } from 'redux';
import { STARSHIP } from './starshipActionTypes';

function Starship(props) {
    useEffect(() => {
        props.loadData();
    }, [])
    return (
        <div className="Starship">
            <div className="starship-form">
                {props.showForm && <StarshipForm parentprops={props} />}
            </div>

            <button onClick={() => props.toggleForm()}>Add Starship</button>

            <div className="starship-list">
                {props.loading && <div>Loading .... </div>}
                {props.loadListError && <div>Error Loading starship list</div>}
                {props.list.map((value, index) => {
                    return StarshipList(value);
                })}
            </div>
        </div>
    );
}

function StarshipForm(props) {
    const [name, setName] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let payload = {};
        payload.name = name;
        props.parentprops.storeStarship(payload);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
        <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

function StarshipList(props) {
    return (
        <div>
            <span>{props.name}</span>
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        list: state.starshipReducer.list,
        showForm: state.starshipReducer.showForm,
        loading: state.starshipReducer.loading,
        loadListError: state.starshipReducer.loadListError,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    storeStarship: storeStarship, 
    loadData: loadStarships,
    toggleForm: () => ({
        type: STARSHIP.SHOWFORM
    }),
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Starship);
