import React from "react"

const PaginationComponet = ({pages, setCurrentPage}) => {

  const Pages = pages ? pages : 0
  const SetCurrentPage = setCurrentPage ? setCurrentPage : 0

  return (
    <div>
      {Array.from(Array(Pages), (item, index) => {
          return <button
                  key={index}
                  value={index}
                  onClickCapture={
                  (e)=> SetCurrentPage(Number(e.target.value))
                  }
                  >{index + 1}</button>
      })}
      </div>
  )
}
export default PaginationComponet