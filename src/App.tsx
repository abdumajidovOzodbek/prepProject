import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './modules/auth/components/createAcc.loyout'
import MyComponent from './modules/auth/components/createAccount'
import Verify from './modules/auth/components/verification'
import CreateUser from './modules/auth/components/createUser'
import UserLayout from './modules/core/component/layout'
import Profile from './modules/profile/components/profile'
import Managment from './modules/managment/components/manage'
import BackEndComp from './modules/backend/components/backend'
import Rating from './modules/rating/components/rating'
import TestBackend from './modules/backend/components/test.backend'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={< Layout />} >
            <Route path='/auth/login' element={<MyComponent />} />
            <Route path='/auth/verify' element={<Verify />} />
            <Route path='/auth/addUser' element={<CreateUser />} />
          </Route>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Managment />} />
            <Route path='/profile' element={<Profile />} />
            <Route path={'/management'} element={<Managment />} />
            <Route path='/backend' element={<BackEndComp />} />
            <Route path='/rating' element={<Rating />} />
            <Route path='/result' element={<TestBackend />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
