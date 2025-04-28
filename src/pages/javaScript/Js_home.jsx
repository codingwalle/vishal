import React from 'react'
import FrontendCompiler from '../../includes/Frontend_compiler'
import Sidebar_topic from '../../includes/Sidebar_topic'

function Js_home() {
    return (
        <>
            <Js_text />
        </>
    )
}

export default Js_home


function Js_text() {
    return (
        <>
            <div className="code-main-container">
                <Sidebar_topic cores="Js" />
                <div className="code-mainbar">
                    <h2>JavaScript Tutorials</h2>
                    <Next_prev />
                    <Js_tutorials />
                    <Js_introduction />
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
                        <li>What is JavaScript ?</li>
                        <li>What are the features of javaScript ?</li>
                        <li>Wy We use JavaScript ?</li>
                        <li>Who  invented Javascript ?</li>
                    </ol>
                </div>


            </div>
        </>
    )
}

function Js_tutorials({ name }) {
    // useEffect(() => {
    //     document.title = name;
    //   }, [name]); 

    return (
        <>
            <h1> Learn JavaScript Basic to Advance </h1>
            <div className="code-html-text">
                <div className="code-points-list">
                    <ul>
                        <p>The CodingWalla HTML course covers everything from the fundamentals to advanced concepts, so it likely offers a well-structured and complete roadmap for mastering HTML.</p>
                        <li>Javascript is a lightweighted, Object Oriented Programming Lenguage.</li>
                        <li> JavaScript (JS) is used to create dynamic and interactive web pages and websites.</li>
                        <li>Javascript Support ES6</li>
                        <li> In Javascript we use .java extension to save java file. </li>
                    </ul>
                </div>
                <p>This <strong> JavaScript tutorial</strong> we use how to add javaScript. If you have complet Html, css so go ahead to learn javascript.  </p>
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

function Js_introduction() {
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

