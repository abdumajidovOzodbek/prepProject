import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './modules/auth/components/createAcc.loyout'
import MyComponent from './modules/auth/components/createAccount'
import Verify from './modules/auth/components/verification'
import CreateUser from './modules/auth/components/createUser'
import UserLayout from './modules/profile/components/layout'
import Profile from './modules/profile/components/profile'
import Managment from './modules/managment/components/manage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={< Layout />} >
            <Route path='/auth/tel' element={<MyComponent />} />
            <Route path='/auth/verify' element={<Verify />} />
            <Route path='/auth/addUser' element={<CreateUser />} />
          </Route>
          <Route path='/' element={<UserLayout/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/managment' element={<Managment/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
