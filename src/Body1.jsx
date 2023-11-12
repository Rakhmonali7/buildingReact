import React from "react";
import './body1.css'

function BodyOne(){
    return(
        <div>
            <div className="container">

                <div className="left">
                    <img src="./pic/lrec1.png" alt="" />
                    <img className="smPic" src="./pic/lrecsm.png" alt="" />
                </div>

                <div className="right">
                    <p>About Us</p>
                    <h3 className="righth3">We are Specializing in interior Improvments</h3>
                    <p className="rightP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra posuere sem purus enim eleifend habitant arcu, sed.</p>

                    <div className="rSubcont">
                        <div className="subl">
                            <img src="./pic/support1.svg" alt="" />
                            <h3 style={{padding: '15px 0'}}>Free Consulatation</h3>
                            <p className="subp">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                        <div className="subr">
                            <img src="./pic/team1.svg" alt="" />
                            <h3 style={{padding: '15px 0'}}>Best Team Members</h3>
                            <p className="subp">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                    </div>
                    <button style=
                    {
                        {padding: '1rem 2',
                    width: '10.5625rem',
                        height: '3.5rem',
                    margin: '1.5rem 0'}
                } className="btnLogo">Explore Now</button>
                </div>
            </div>
        </div>
    )
}
export default BodyOne