import React from "react"

const PaginationComponet = (pages, setCurrentPage) => {
    return (
      <div>
        {Array.from(Array(pages), (item, index) => {
            return <button
                    key={index}
                    value={index}
                    onClickCapture={
                    (e)=> setCurrentPage(Number(e.target.value))
                    }
                    >{index + 1}</button>
        })}
        </div>
    )
}
export default PaginationComponet