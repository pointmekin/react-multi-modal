import React from "react"
import { useContext } from "react"

import { useHistory } from "react-router-dom"
import { ModalContext } from "../contexts/modalContext"

const Q2 = () => {
  const history = useHistory()
  const { page, setPage } = useContext(ModalContext)

  const closeModal = (e: any) => {
    e.stopPropagation()
    history.push("/home")
  }

  const goBack = () => {
    setPage(page - 1)
  }

  React.useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [])

  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 w-full h-screen z-10 flex items-center justify-center">
      <span
        className="inline-block absolute top-0 right-0 mr-4 mt-4 cursor-pointer"
        onClick={closeModal}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <div className="w-56 mt-8 mx-4 bg-white rounded-md border border-gray-200 overflow-hidden shadow-lg">
        <div className="flex flex-col items-center py-4 px-2 bg-gray-300">
          <span className="w-10 h-10 rounded-full overflow-hidden inline-block">
            <img
              src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
              alt=""
            />
          </span>
          <h1 className="text-lg font-medium text-gray-600 mt-2">Title</h1>
          <p className="text-sm text-gray-600">Question 2</p>
        </div>
        <div
          className="flex items-center justify-center h-full content-center"
          onClick={() => goBack()}
        >
          <button className="h-10 w-20 bg-green-200 m-2">back</button>
        </div>
      </div>
    </div>
  )
}

export default Q2
