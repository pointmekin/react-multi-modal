import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../contexts/modalContext'
import Q1 from '../pages/q1'
import Q2 from '../pages/q2'

const MainModal = () => {
  const { page } = useContext(ModalContext)
  
  const renderModal = (page: number) => {
    switch(page) {
      case 1: 
        return <Q1 />
      case 2:
        return <Q2 />
    }
  }
  
  return (
    <>
      <div>{renderModal(page)}</div>
    </>
  )
}

export default MainModal