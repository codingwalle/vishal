import React from 'react'
import { useEffect } from 'react';
import FrontendCompiler from '../../includes/Frontend_compiler';
import Sidebar_topic from '../../includes/Sidebar_topic';



function Introduction() {
    return (
        <>
            <Html_text />
        </>
    )
}


export default Introduction



function Html_text() {



    return (
        <>
            <div className="code-main-container">
                <Sidebar_topic cores="Html" />
                <div className="code-mainbar">
                    <h2>HTML  Introduction </h2>
                    <Next_prev />
                    <Html_tutorials />
                    <Html_introduction />
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
                        <li>What is HTML ? </li>
                        <li>Full form of HTML ? </li>
                        <li>Why do we use HTML ?</li>
                        <li>Who developed HTML ?</li>
                        <li>Main purpose of HTML?</li>
                        <li>What is the latest version of HTML?</li>
                        <li>Difference between HTML and HTML5 ?</li>
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
            <h1> What is HTML ? </h1>
            <div className="code-html-text">
                <div className="code-points-list">
                    <ul>
                        <li>HTML Stands  for Hyper Text Markup Language.</li>

                        <li>HTML creates the structure of web pages.</li>
                        <li>HTML is widely used language on the web.</li>
                        <li>We can create a static website by HTML only.</li>
                        <li>Technically, HTML is a Markup language rather than a programming language.</li>
                        <li>we use .html extension to save a html File. </li>
                    </ul>
                    
                </div>

                <div className="code-note-points">
                    <ul>
                        <p><strong>Important Note :</strong> </p>
                        <p> <strong>Hypertext: </strong>  Links to other web pages and websites are referred to as hypertext..</p>
                    <p> <strong>Markup language: </strong> A computer language used to apply formatting and layout rules to a text document is called a markup language.
                    </p>
                    </ul>
                </div>
                {/* <div className="code-note-points">
                    <ul>
                        <p> Important Note :</p>
                        <li>The <strong>{"<"}!DOCTYPE html{'>'}</strong> declaration defines that this document is an HTML5 document</li>
                        <li>The <strong>{"<html>"}</strong> element is the root element of an HTML page</li>
                        <li>The <strong>{"<head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<head>"}</strong> element contains meta information about the HTML page</li>
                        <li>The <strong>{"<title>"}</strong> element specifies a title for the page (which is shown in the browser's title bar in the page's)</li>
                    </ul>
                </div> */}
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
                        <h3>Features of  Html</h3>
                        <div className="code-points-list">
                            <ul>
                                <li> HTML learning is very easy to use and understand.</li>
                                <li>Html is platform-independent.</li>
                                <li>We can use tags in either lower-case or upper-case since HTML is a case-insensitive language</li>
                                <li>Html is Open source,its available freely</li>
                                <li>Html is User Friendly and Simple.</li>
                            </ul>
                        </div>


                    </div>
                </>
            </div>
        </>
    )
}

