import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const arrayOptions = ["terra", "agua", "fogo", "ar"]

const Option = ({setOptions}) => {

    const [check, setCheck] = useState([])
    
    useEffect(() => {
        setOptions(check)
    }, [check])

    return (
        <fieldset>
            <legend>Tipos</legend>
            {arrayOptions.map(itensOption => (
                <div key={itensOption}>
                    <input type="checkbox" id={itensOption} name={itensOption} value={itensOption} onChange={(e) => setCheck((oldCheck) => {
                        if(oldCheck.includes(e.target.value)){
                            oldCheck.splice(oldCheck.indexOf(e.target.value), 1)
                            const newCheck = oldCheck
                            return ([...newCheck])
                        }else{
                            oldCheck.push(e.target.value)
                            const newCheck = oldCheck
                            return ([...newCheck])
                        }
                    })}/>
                    <label htmlFor={itensOption}>{itensOption[0].toUpperCase() + itensOption.substring(1)}</ label>
                </ div>
            ))}
        </ fieldset>
    )
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(null, mapDispatchToProps)(Option)