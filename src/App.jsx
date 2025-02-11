import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import { RedirectToSignIn, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/dashboard" element={
            <>
                <SignedIn>
                  <Dashboard/>
                </SignedIn>

                <SignedOut>
                  <RedirectToSignIn/>
                </SignedOut>

            </>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
