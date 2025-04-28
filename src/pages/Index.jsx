import React from 'react'
import "../assets/css/style.css"
import { Link } from 'react-router-dom'


function Index() {
    return (
        <>
            <Banner />
            <FrontEnd_Technology />
            <Backend_Technology />
            <Database_Technology />
            <AI />
           {/* <Frontend_compiler/> */}
        </>
    )
}

export default Index


function Banner() {
    return (
        <>
            <div className="code-banner-main">
                <div className="code-banner">
                    <div className="code-banner-item">
                        <div className="code-banner-text">
                            <h4>Unlock Your Potential growth with  <strong>Codingwalla.com</strong></h4>
                            <h1>
                                “The Ultimate Platform for Learning Coding and Tech Skills!"
                            </h1>
                            <p>
                                Codingwalla.com offers a comprehensive online learning platform
                                designed to teach and tech skills through interactive lessons,
                                tutorials, and hands-on projects, empowering students to build
                                real-world expertise.
                            </p>
                            <button className="code-cta-btn">Get Started</button>
                        </div>
                        <div className="code-banner-img">
                            <img
                                src="/assets/images/banner_img.jpeg"
                                alt="Learning"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="code-kickstart">
                <p>Kickstart Your Web Development Journey with <strong>Codingwalla.com</strong></p>
            </div>
        </>
    )
}


function FrontEnd_Technology() {
    return (
        <>
            <div className="code-main">
                <div className="code-heading">
                    <h1>FrontEnd Technology</h1>
                </div>
                <div className="code-technology-main">
                    <div className="code-technology">
                        <div className="technology-boxs">
                            <div className="t-box">
                                <Link to="/html"> <p>   Html</p> <img src="/assets/images/html.png" alt="" />
                                </Link>
                            </div>
                            <div className="t-box"> <Link className='code-para-img' to="/Css"> <p>   Css</p>  <img src="/assets/images/css.png" alt="" />
                            </Link></div>
                            <div className="t-box"> <Link className='code-para-img' to="/js">  <p>  javascript</p> <img src="/assets/images/javascript.png" alt="" />
                            </Link></div>
                            <div className="t-box">   <a href="">  <p>   XML </p> <img src="/assets/images/xml.png" alt="" />
                            </a></div>



                        </div>
                    </div>
                </div>
                <div className="code-technology-main">
                    <div className="code-technology">
                        <div className="technology-boxs">
                            <div className="t-box">
                                <a href="">  <p>  Bootsrap </p> <img src="/assets/images/bootstrap.png" alt="" />
                                </a>
                            </div>
                            <div className="t-box"> <a href="">  <p>  Tailwind </p>  <img src="/assets/images/tailwind.png" alt="" />
                            </a></div>
                            <div className="t-box"> <a href=""> <p>  React js</p> <img src="/assets/images/react_js.png" alt="" />
                            </a></div>
                            <div className="t-box"> <a href="">  <p>  View Js</p> <img src="/assets/images/view_js.png" alt="" />
                            </a></div>


                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}


function Backend_Technology() {
    return (
        <>

            <div className="code-main">
                <div className="code-heading">
                    <h1>BackEnd Technology</h1>
                </div>

                <div className="code-technology-main">
                    <div className="code-technology">
                        <div className="technology-boxs">
                            <div className="t-box">
                                <a href="">  <p>  Php </p>  <img src="/assets/images/php.png" alt="" />
                                </a>
                            </div>
                            <div className="t-box"><a href="">  <p> Python </p> <img src="/assets/images/python.jpeg" alt="" />
                            </a>   </div>
                            <div className="t-box"> <a href="">  <p>  .Net </p> <img src="/assets/images/.net.png" alt="" />
                            </a></div>
                            <div className="t-box"> <a href="">  <p>  C# </p>  <img src="/assets/images/C-sharp.jpeg" alt="" />
                            </a></div>

                        </div>
                    </div>
                </div>

                <div className="code-technology-main">
                    <div className="code-technology">
                        <div className="technology-boxs">
                            <div className="t-box">
                                <a href=""> <p>  Node js </p>   <img src="/assets/images/node_js.jpeg" alt="" />
                                </a>
                            </div>
                            <div className="t-box"> <a href="">  <p>  Angular js</p> <img src="/assets/images/angular_js.png" alt="" />
                            </a></div>
                            <div className="t-box">   <a href="">  <p>  Express js</p> <img src="/assets/images/express_js.jpeg" alt="" />
                            </a></div>
                            <div className="t-box">    <a href="">  <p>  Java</p> <img src="/assets/images/java.png" alt="" />
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Database_Technology() {
    return (
        <>
            <div className="code-main">
                <div className="code-heading">
                    <h1>Database</h1>
                </div>
                <div className="code-technology-main">
                    <div className="code-technology">
                        <div className="technology-boxs">
                            <div className="t-box">
                                <a href="">  <p>  SQL </p> <img src="/assets/images/sql.png" alt="" />
                                </a>
                            </div>
                            <div className="t-box"> <a href="">  <p>  MySQL</p> <img src="/assets/images/my_sql.png" alt="" />
                            </a></div>
                            <div className="t-box"> <a href="">   <p>  Mongo db</p>  <img src="/assets/images/mongo_db.png" alt="" />
                            </a></div>
                            <div className="t-box"> <a href="">  <p>  ORACLE</p>  <img src="/assets/images/oracle.png" alt="" />
                            </a></div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}





function AI() {
    return (
        <>
            <div className="code-main">
                <div className="code-heading">
                    <h1>AI ML and Data science</h1>
                </div>
                <div className="code-technology-main">
                    <div className="code-technology">
                        <div className="technology-boxs">
                            <div className="t-box code-robotics ">
                                <a href="">  <p style={{ color: "white" }}>ROBOTICS </p>
                                </a>
                            </div>
                            <div className="t-box code-robotics "> <a href="">  <p style={{ color: "white" }}> AUTOMITION </p>
                            </a></div>
                            <div className="t-box code-robotics "> <a href="">   <p style={{ color: "white" }}>MACHINE LEARNING</p>
                            </a></div>
                            <div className="t-box code-robotics "> <a href="">  <p style={{ color: "white" }}> SPEECH RECOGNITION</p>
                            </a></div>


                        </div>
                        <div className="technology-boxs">
                            <div className="t-box code-robotics ">
                                <a href="">  <p style={{ color: "white" }}>ROBOTICS </p>
                                </a>
                            </div>
                            <div className="t-box code-robotics "> <a href="">  <p style={{ color: "white" }}> AUTOMITION </p>
                            </a></div>
                            <div className="t-box code-robotics "> <a href="">   <p style={{ color: "white" }}>MACHINE LEARNING</p>
                            </a></div>
                            <div className="t-box code-robotics "> <a href="">  <p style={{ color: "white" }}> SPEECH RECOGNITION</p>
                            </a></div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

