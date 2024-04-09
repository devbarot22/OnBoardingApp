import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetInPage from "./components/GetInPage"
import QandA from "./components/QandA"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetInPage />}/>
      <Route path="QandA" element={<QandA />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
