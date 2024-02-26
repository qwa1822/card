import ScrollToTop from 'components/shared/ScrollToTop'
import CardPage from 'pages/Card'
import Home from 'pages/Home'
import Test from 'pages/Test'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/test" element={<Test />} />
        <Route />
      </Routes>
    </>
  )
}

export default App
