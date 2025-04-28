import React from 'react'
import FrontendCompiler from '../../includes/Frontend_compiler'
import Sidebar_topic from '../../includes/Sidebar_topic'
function Js_introduction() {
  return (
   <>
    <Js_text />
   </>
  )
}

export default Js_introduction



function Js_text() {
    return (
        <>
            <div className="code-main-container">
                <Sidebar_topic cores="Js"/>
                <div className="code-mainbar">
                    <h2>JavaScript Tutorials</h2>
                    <Next_prev />
                    <Js_tutorials/>
                    <Js_intro />
                    <FrontendCompiler />
                    <Next_prev /> 
                    <Exersice />  
                </div>
            </div>
        </>
    )
  }
  
  
  
  
  
  function Next_prev() {
    return (
        <>
            <div className="code_mainbar-content">
                <div class="code-button-container">
                    <button class="code-nav-button code-previous"> <i class="fa-solid fa-angle-left"></i> Previous </button>
                    <button class="code-nav-button code-next">Next <i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </>
    )
  }
  
  
  
  function Exersice() {
    return (
        <>
            <h3 className='code-interview-ques'> Interview Questions </h3>
            <div className="code-exersice-ques">
  
                <div className=" code-ques">
                    <ol type="A">
                        <li>What is html ?</li>
                        <li>Why we use  html ?</li>
                        <li>What we stands for html ?</li>
                        <li>Syntax Of html ?</li>
                    </ol>
                </div>
  
  
            </div>
        </>
    )
  }
  
  function Js_tutorials({name}) {
    // useEffect(() => {
    //     document.title = name;
    //   }, [name]); 
  
    return (
        <>
            <h1> Learn JavaScript Introduction </h1>
            <div className="code-html-text">
                <div className="code-points-list">
                    <ul>
                        <p>The major points of Js are given below:</p>
                        <li>Js stands for HyperText Markup Language.</li>
                        <li>HTML is used to create web pages and web applications.</li>
                        <li>HTML is widely used language on the web.</li>
                        <li>We can create a static website by HTML only.</li>
                        <li>Technically, HTML is a Markup language rather than a programming language.</li>
                    </ul>
                </div>
                <p>This <strong> HTML tutorial</strong> covers everything from basic HTML fundamental concepts and tags to advanced techniques, such as forms, modal boxes, multimedia, and HTML5. This tutorial is designed to help both beginners and experienced designers become experts in building dynamic and responsive websites.</p>
                <div className="code-note-points">
                    <ul>
                        <p> Important Note :</p>
                        <li>The <strong>{"<"}!DOCTYPE html{'>'}</strong> declaration defines that this document is an HTML5 document</li>
                        <li>The <strong>{"<html>"}</strong> element is the root element of an HTML page</li>
                        <li>The <strong>{"<head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<title>"}</strong> element specifies a title for the page (which is shown in the browser's title bar in the page's)</li>
                    </ul>
                </div>
            </div>
        </>
    )
  }
  
  function Js_intro() {
    return (
        <>
            <div className="code-introduction-text" id='Intro'>
                <>
                    <div className="code-html-text">
                        <h3>History of  html</h3>
  
                        <p>HTML is a standard markup language, which stands for <strong>Hyper Text Markup Language</strong>. It is widely used language to create webpages. HTML invented by Tim Berners-Lee in late 1991, but it's first version "HTML 1.0" was released in 1993, and "HTML 2.0" was the first standard HTML specification, which was published in 1995.</p>
                        <h3>What is HTML ?</h3>
                        <p>HTML (HyperText Markup Language) is a standard markup language to design the structure of a webpage. HTML is the combination of HyperText and Markup Language. HyperText defines the internal links between webpages, and Markup language defines the layout and presentation of text and media.</p>
  
                        <h3>History of  html</h3>
  
                        <p>HTML is a standard markup language, which stands for Hyper Text Markup Language. It is widely used language to create webpages. HTML invented by Tim Berners-Lee in late 1991, but it's first version "HTML 1.0" was released in 1993, and "HTML 2.0" was the first standard HTML specification, which was published in 1995.</p>
                        <h3>What is HTML ?</h3>
                        <p>HTML (HyperText Markup Language) is a standard markup language to design the structure of a webpage. HTML is the combination of HyperText and Markup Language. HyperText defines the internal links between webpages, and Markup language defines the layout and presentation of text and media.</p>
                    </div>
                </>
            </div>
        </>
    )
  }
  
  