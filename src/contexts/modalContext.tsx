import React, { createContext, useState } from "react"

export interface UserConstruct {
  backgroundPage: any,
  setBackgroundPage: (value: any) => void,
  page: number,
  setPage: (value: number) => void,
  completedPages: number[],
  setCompletedPages: (value: number[]) => void,
}

export const ModalContext = createContext({} as UserConstruct)

export default function ModalContextProvider({ ...props }) {
  const [backgroundPage, setBackgroundPage] = useState<any>()
  const [page, setPage] = useState(1)
  const [completedPages, setCompletedPages] = useState<number[]>([])

  
  const value = { backgroundPage, setBackgroundPage, page, setPage, completedPages, setCompletedPages }
  return <ModalContext.Provider value={value} {...props} />
}