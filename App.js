import React from 'react'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import { Route, Switch } from 'react-router-dom'
import ProfilInformation from './Pages/ProfilInformation'
import AddPeople from './Pages/AddPeople'
import Forgetpass from './Pages/Forgetpass'
import Otpverify from './Pages/Otpverify'
import Changepass from './Pages/Changepass'
import NoteState from './Pages/NoteState'
function App() {
  return (<>
  <NoteState>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/ProfilInformation" component={ProfilInformation} />
      <Route exact path="/AddPeople" component={AddPeople} />
      <Route exact path="/forgetpass" component={Forgetpass} />
      <Route exact path="/Otp" component={Otpverify} />
      <Route exact path="/Changepass" component={Changepass} />
    </Switch>
    </NoteState>
  </>
  )
}

export default App
