import React from 'react';
import "../assets/css/mk.css"
import { Link } from 'react-router-dom'

function Sidebar_topic(props) {

    return (
        <>
            <div className="code-side" id='CodingWalla-codeside'>
                <div className="code-sidebar" >
                    <div id="leftmenuinner" className='left-menu'>
                        <h2><span>{props.cores}</span> Tutorial</h2>
                        <ul>
                            <li>
                                <Link to={`/${props.cores}`}> {props.cores} Home</Link>
                            </li>
                            <li>
                                <Link to={`/${props.cores}/introduction`}>{props.cores} Introduction</Link>
                            </li>
                            <li>
                                <Link to={`/${props.cores}/history`}>{props.cores} History</Link>
                            </li>
                            <li>
                                <Link  to={`/${props.cores}/syntax`}> {props.cores} Syntex</Link>
                            </li>
                            <li>
                                <Link  to={`/${props.cores}/comments`}>{props.cores} comments</Link>
                            </li>
                            <li>
                                <a  href="#">{props.cores} Intro</a>
                            </li>
                            <li>
                                <a target="_top" href="">React Get Started</a>
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

                        <h2>{props.cores} Exercises</h2>
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
                        <h2>Html Exercises</h2>
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
                        <br /><br />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Sidebar_topic;