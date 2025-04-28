import React from 'react'
import FrontendCompiler from '../../includes/Frontend_compiler'
import Sidebar_topic from '../../includes/Sidebar_topic'
function History() {
    return (
        <>
            <Html_text />
        </>
    )
}

export default History




function Html_text() {



    return (
        <>
            <div className="code-main-container">
                <Sidebar_topic cores="Html" />
                <div className="code-mainbar">
                    <h2>HTML  History </h2>
                    <Next_prev />
                    <Html_tutorials />
                    {/* <Html_introduction /> */}
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
            <h1> History of Html </h1>
            <div className="code-html-text">
                <div className="code-points-list">
                    <ul>
                        <p>Now , we are going to take a detailed tutorial history of HTML, exploring how it was created, how it evolved over the years, and how it became the fundamental language:</p>
                        <h4>HTML 1.0 (1991)                        </h4>
                        <li>The original version was designed by Tim Berners-Lee. It was very simple, designed for creating basic documents and linking them together.</li>
                        <h4>HTML 2.0 (1995)</h4>
                        <li>The first formal specification standardized core features like tables, forms, and text formatting.</li>
                        <h4>HTML 3.2 (1997)</h4>
                        <li>Added more complex elements like tables and applets, plus support for inline CSS for styling.</li>
                        <h4>HTML 4.01 (1999)</h4>
                        <li>My fh4us was on the separation of content from presentation. Encouraged the use of external CSS and introduced a better approach to structuring documents.
                        </li>
                        <h4>XHTML (2000s)</h4>
                        <li>The XML-compliant version of HTML necessitated stricter rules. Although it was developed for stricter syntax, it was less widely adopted.</li>
                        <h4>HTML5 (2008)</h4>
                        <li>The latest version of html is HTML5.</li>
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
                        <h3>History of  html</h3>

                        <p>HTML is a standard markup language, which stands for <strong>Hyper Text Markup Language</strong>. It is widely used language to create webpages. HTML invented by Tim Berners-Lee in late 1991, but it's first version "HTML 1.0" was released in 1993, and "HTML 2.0" was the first standard HTML specification, which was published in 1995.</p>
                        <h3>What is HTML ?</h3>
                        <p>HTML (HyperText Markup Language) is a standard markup language to design the structure of a webpage. HTML is the combination of HyperText and Markup Language. HyperText defines the internal links between webpages, and Markup language defines the layout and presentation of text and media.</p>
                    </div>
                </>
            </div>
        </>
    )
}

