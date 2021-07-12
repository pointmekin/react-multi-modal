import React, { useContext } from "react"
import './styles/output.css'
import './assets/styles/modal.css'

import {
  Switch,
  Route
} from "react-router-dom"
import Home from "./pages/Home"
import Question from "./pages/Question"
import { ModalContext } from "./contexts/modalContext"
import MainModal from "./components/MainModal"


export default function App() {

  const { backgroundPage } = useContext(ModalContext)
  const defaultLocation = {pathname: "/home/", search: "", hash: "", state: undefined}

  return (
    <div className="w-full bg-gray-200 px-4 relative">
        {backgroundPage && <Route path="/home/q1" children={<MainModal />} />}
        <Switch location={backgroundPage ?? defaultLocation}>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Question} />
        </Switch>
    </div>
  )
}