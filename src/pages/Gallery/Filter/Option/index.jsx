import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const Option = ({setOptions}) => {
    const [check, setCheck] = useState(["terra", "agua", "fogo", "ar"])
    useEffect(() => {
        setOptions(check)
    }, [check])

    return (
        <fieldset>
            <legend>Tipos</legend>
            <div>
                <input type="checkbox" id="terra" name="terra" value="terra" onChange={
                    (e) => setCheck(
                        (oldCheck) => {
                            if(oldCheck.){
                                
                            }
                            console.log(oldCheck)
                            return ([
                                ...oldCheck,
                                e.target.value
                            ])
                        }
                    )
                }/>
                <label htmlFor="terra">Terra</ label>
            </ div>
            <div>
                <input type="checkbox" id="agua" name="agua" value="agua"/>
                <label htmlFor="agua">Água</ label>
            </ div>
            <div>
                <input type="checkbox" id="fogo" name="fogo" value="fogo"/>
                <label htmlFor="fogo">Fogo</ label>
            </ div>
            <div>
                <input type="checkbox" id="ar" name="ar" value="ar"/>
                <label htmlFor="ar">Ár</ label>
            </ div>
        </ fieldset>
    )
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(null, mapDispatchToProps)(Option)