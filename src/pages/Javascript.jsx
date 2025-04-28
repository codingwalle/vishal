import React from 'react';
import { Outlet } from 'react-router-dom';


function Javascript() {
    return (
        <>
          <Outlet />
        </>
    )
}

export default Javascript



function Js_Text() {
    return (
        <>
            <div className="code-main-container">
                <div className="code-side">
                    <div className="code-sidebar">
                        <div id="leftmenuinner" className='left-menu'>
                            <h2><span>Javascript</span> Tutorial</h2>
                            <ul>
                                <li>
                                    <a target="_top" href="default.asp">JavaScript Tutorials</a>
                                </li>
                                <li>
                                    <a target="_top" href="default.asp">JavaScript Home</a>
                                </li>
                                <li>
                                    <a target="_top" href="default.asp">JavaScript Introduction</a>
                                </li>
                                <li>
                                    <a target="_top" href="default.asp">React syntax</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_intro.asp">React Intro</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_getstarted.asp">React Get Started</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_upgrade.asp">React Upgrade</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_es6.asp">React ES6</a>
                                </li>
                                <li>
                                    <a target="_top" href="default.asp">React Home</a>
                                </li>
                                <li>
                                    <a target="_top" href="default.asp">React Home</a>
                                </li>
                            </ul>

                            <h2>Javascript Exercises</h2>
                            <ul>
                                <li>
                                    <a target="_top" href="react_compiler.asp">React Compiler</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_quiz.asp">React Quiz</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_exercises.asp">React Exercises</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_syllabus.asp">React Syllabus</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_study_plan.asp">React Study Plan</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_getstarted.asp">React Get Started</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_upgrade.asp">React Upgrade</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_server.asp">React Server</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_interview_prep.asp">React Interview Prep</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_exam.asp">React Certificate</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_upgrade.asp">React Upgrade</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_server.asp">React Server</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_interview_prep.asp">React Interview Prep</a>
                                </li>
                                <li>
                                    <a target="_top" href="react_exam.asp">React Certificate</a>
                                </li>
                            </ul>
                            <br />
                            <br />
                        </div>

                    </div>
                </div>
                <div className="code-mainbar">
                <div className="code-mainbar">
                    <h2>HTML Tutorails</h2>
                    <Next_prev />
                    <Html_tutorials name="Html - Home"/>
                    <Html_introduction />
                    <Frontend_Compiler />
                    <Next_prev />

                    <Exersice />

                </div>
                </div>
            </div>
        </>
    )
}

