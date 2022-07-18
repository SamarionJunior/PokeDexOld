import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const arrayOptions = ["terra", "agua", "fogo", "ar"]

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
        <fieldset>
            <legend>Tipos</legend>
            {arrayOptions.map(itensOption => (
                <div key={itensOption}>
                    <input type="checkbox" 
                        id={itensOption} 
                        name={itensOption} 
                        value={itensOption} 
                        checked={setChecked(check, itensOption)} 
                        onChange={(e) => setCheck((oldCheck) => generateNewCheck(oldCheck, e))}
                    />
                    <label htmlFor={itensOption}>
                        {capitalFirstLetter(itensOption)}
                    </ label>
                </ div>
            ))}
        </ fieldset>
    )
}

const mapStateToProps = state => ({
    options: state.filter.options
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Option)