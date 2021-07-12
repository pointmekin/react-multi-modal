import React, { useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ModalContext } from "../contexts/modalContext"

function Question() {

  const location = useLocation()

  const { setBackgroundPage } = useContext(ModalContext)

  useEffect(() => {
    setBackgroundPage(location)
  }, [])

  return (
    <div className="pt-16 w-full">
      <h1 className="text-2xl font-semibold text-gray-600 text-center">Questions</h1>
      <div className="flex justify-center flex-wrap mt-8">
        <Link
          to={{
            pathname:"/home/q1",
            state: { background: location }
          }}
        >Open modal</Link>
      </div>
    </div>
  )
}

export default Question