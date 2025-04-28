import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './includes/Header'
import Footer from './includes/Footer'


import Index from './pages/Index'
import './App.css'



// html routes
import Html from './pages/Html'
import Home from './pages/Html/Home'
import Introduction from './pages/Html/Introduction'
import History from './pages/Html/History'
import Syntax from './pages/Html/Syntax'
import Comments from './pages/Html/Comments'

// Css routes
import Css from './pages/Css'
import CssHome from './pages/css/CssHome'
import Css_Introduction from './pages/css/Css_Introduction'
import Css_history from './pages/css/Css_history'
import Css_syntax from './pages/css/Css_syntax'
import Css_comments from './pages/css/Css_comments'
// javascript routes
import Javascript from './pages/Javascript'
import Js_home from './pages/javaScript/Js_home'
import Js_introduction from './pages/javaScript/Js_introduction'
import Js_History from './pages/javaScript/Js_History'
import Js_Syntax from './pages/javaScript/Js_Syntax'
import Js_comments from './pages/javaScript/Js_comments'


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Index />} />
       
        <Route path="/html" element={<Html />}>
          <Route index element={<Home />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="history" element={<History />} />
          <Route path="syntax" element={<Syntax />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/css" element={<Css />}>
          <Route index element={<CssHome />} />
          <Route path="introduction" element={<Css_Introduction />} />
          <Route path="history" element={<Css_history />} />
          <Route path="syntax" element={<Css_syntax />} />
          <Route path="comments" element={<Css_comments />} />
        </Route>
        <Route path="/js" element={<Javascript />}>
          <Route index element={<Js_home />} />
          <Route path="introduction" element={<Js_introduction/>} />
          <Route path="history" element={<Js_History/>} />
          <Route path="syntax" element={<Js_Syntax/>} />
          <Route path="comments" element={<Js_comments/>} />
          </Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
