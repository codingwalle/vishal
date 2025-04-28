import React from 'react'
import FrontendCompiler from '../../includes/Frontend_compiler'
import Sidebar_topic from '../../includes/Sidebar_topic'
function Comments() {
    return (
        <>
            <Html_text />
        </>
    )
}

export default Comments


function Html_text() {



    return (
        <>
            <div className="code-main-container">
                <Sidebar_topic cores="Html" />
                <div className="code-mainbar">
                    <h2>HTML   Comments </h2>
                    <Next_prev />
                    <Html_tutorials />
                    {/* <Html_introduction /> */}
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
                        <li>What is Comments  html ?</li>
                        <li>How many  types of comment in  html ?</li>
                        <li>how can we comment is Html ?</li>
                        <li>What is Single line comment ?</li>
                        <li>What is Double line comment ?</li>
                        <li>syntax of comments ?</li>
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
    const comment=` <! --  this is comment  --> `;

    return (
        <>
            <h1> Comments  in Html  </h1>
            <div className="code-html-text">
                <div className="code-points-list">
                    <ul>
                        <li>Comments are piece of code or text written in your code</li>
                        <li>HTML comments are non-executable code. Browser Will no read this Code.</li>
                        <li>Comments increase the readability of code.</li>
                        <li>Comments are not visible to any search engine.</li>
                        <li>Comments also part of the code. which gives explanation of our code and mak it esy to understand.</li>
                    </ul>
                </div>
                 <p> We can Add comments in our code using {comment} tag. If Anything written in this tag so browser read as Comment. </p>
                <p></p>
                <p> <strong> Multiline Comment: </strong> A web page is a document which is commonly written in HTML and translated by a web browser. </p>
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

function Html_introduction() {
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

