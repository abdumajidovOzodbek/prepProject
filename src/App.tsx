import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './modules/auth/components/createAcc.loyout'
import MyComponent from './modules/auth/components/createAccount'
import Verify from './modules/auth/components/verification'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Layout />} >
            <Route path='/tel' element={<MyComponent />} />
            <Route path='/verify' element={<Verify />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
