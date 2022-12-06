import "./style.css";

import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const arrayOptions = [
    "Grass",
    "Fire",
    "Water",
    "Bug",
    "Normal",
    "Poison",
    "Electric",
    "Ground",
    "Fighting",
    "Psychic",
    "Rock",
    "Flying",
    "Ghost",
    "Ice",
    "Dragon",
    "Steel",
    "Dark",
    "Fairy"
]

function setChecked(array, value){
    return array.includes(value) ? true : false
}

function generateNewCheck(oldCheck, e){
    const value = e.target.value
    if(oldCheck.includes(value)){
        oldCheck.splice(
            oldCheck.indexOf(value), 1
        )
    }else{
        oldCheck.push(value)
    }
    return ([...oldCheck])
}

function capitalFirstLetter(word){
    return word[0].toUpperCase() + word.substring(1)
}

const Option = ({options, setOptions}) => {

    const [check, setCheck] = useState(options)
    
    useEffect(() => {
        setOptions(check)
    }, [check])

    return (
        <div className="Option BoxShadow">
            {/* <legend className="Legend">Tipos</legend> */}
            <div className="Inputs">
                {arrayOptions.map(itensOption => (
                    <div key={itensOption}>
                        <input
                            type={"checkbox"}
                            id={itensOption}
                            className="CheckBox"
                            name={itensOption} 
                            value={itensOption} 
                            checked={setChecked(check, itensOption)} 
                            onChange={(e) => setCheck((oldCheck) => generateNewCheck(oldCheck, e))}
                            label={capitalFirstLetter(itensOption)}
                        />
                        <label className="Labels" for={itensOption}>{itensOption}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    options: state.filter.options
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Option)