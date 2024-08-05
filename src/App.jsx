import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page from "./Components/Page"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
