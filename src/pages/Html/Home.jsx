import React from 'react'
import FrontendCompiler from '../../includes/Frontend_compiler';
import Sidebar_topic from '../../includes/Sidebar_topic';


function Home() {
    return (
        <>
            <Html_text />
        </>
    )
}

export default Home



function Html_text() {



    return (
        <>
            <div className="code-main-container">
                <Sidebar_topic cores="Html" />
                <div className="code-mainbar">
                    <h2>HTML Tutorial</h2>
                    <Next_prev />
                    <Html_tutorials />

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

function Html_tutorials({ name }) {
    // useEffect(() => {
    //     document.title = name;
    //   }, [name]); 

    return (
        <>
            <h1> Learn Html From CodingWalla Beginer to Professional </h1>
            <Html_introduction />

            <h3> What is Html ? </h3>
            <div className="code-html-text">
                <div className="code-points-list">
                    <ul>
                        <p>The major points of HTML are given below:</p>
                        <li>HTML stands for HyperText Markup Language.</li>
                        <li>HTML is used to create web pages and web applications.</li>
                        <li>HTML is widely used language on the web.</li>
                        <li>We can create a static website by HTML only.</li>
                        <li>Technically, HTML is a Markup language rather than a programming language.</li>
                    </ul>
                </div>

                <div className="code-note-points">
                    <ul>
                        <p> <strong> Syntax :</strong></p>
                        <li>The <strong>{"<"}!DOCTYPE html{'>'}</strong> declaration defines that this document is an HTML5 document</li>
                        <li>The <strong>{"<html>"}</strong> element is the root element of an HTML page</li>
                        <li>The <strong>{"<head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<title>"}</strong> element specifies a title for the page (which is shown in the browser's title bar in the page's)</li>
                        <li>The <strong>{"</head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<body>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"</body>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"</html>"}</strong> element is the root element of an HTML page</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function Html_introduction() {
    return (
        <>
            <div className="code-introduction-text" id='Intro'>
                <>
                    <div className="code-html-text">
                        <p>This <strong> HTML tutorial</strong> covers everything from basic HTML fundamental concepts and tags to advanced techniques, such as forms, modal boxes, multimedia, and HTML5. This tutorial is designed to help both beginners and experienced designers become experts in building dynamic and responsive websites.</p>
                    </div>
                </>
            </div>
        </>
    )
}




