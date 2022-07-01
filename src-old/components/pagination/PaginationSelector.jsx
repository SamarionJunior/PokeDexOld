import React from "react";

const PaginationSelector = ({itensPerPage, setItensPerPage, pageSequence}) => {
    const ItensPerPage = itensPerPage
    const SetItensPerPage = setItensPerPage
    const PageSequence = pageSequence
    return (
        <dir>
            <select value={ItensPerPage} onChange={(e)=>SetItensPerPage(Number(e.target.value))}>
                {PageSequence.map(sequence => <option value={sequence} key={sequence}>{sequence}</option>)}
            </select>
        </dir>
    )
}

export default PaginationSelector