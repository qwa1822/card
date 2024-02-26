import { Navbar } from 'components/shared/Navbar'
import ScrollToTop from 'components/shared/ScrollToTop'
import CardPage from 'pages/Card'
import Home from 'pages/Home'
import SignUpPage from 'pages/SIgnUp'
import Test from 'pages/Test'
import SignInPage from 'pages/signIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />{' '}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/test" element={<Test />} />
        <Route />
      </Routes>
    </>
  )
}

export default App
