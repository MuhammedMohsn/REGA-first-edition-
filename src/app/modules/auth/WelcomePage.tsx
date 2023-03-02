import React, { Fragment, useEffect, useState } from 'react'
import './welcomeStyles.css'
import "./components/loginStyles.scss"
import Background from '../../../assets/Rega-login.gif'
import BackgroundChange from '../../../assets/Rega-loop.gif'
function WelcomePage() {
    const [showConent, setshowConent] = useState(false)

    
    useEffect(() => {
        let delay=setTimeout(() => {
             setshowConent(true)
        }, 4000)
        return ()=>{clearTimeout(delay)} 
         
    }, [])
    
    return (
        <Fragment>
            <div className="page-wrapper w-100 h-100 " style={{ background: showConent?`url(${BackgroundChange})`:`url(${Background})`, backgroundPosition: showConent? "50% 50%":"10% 50%"}} >
                <div className="page-container h-100 w-100" >
                    <div className="page-content change-image h-100 w-100 "   >
                        <div className="container h-100">
                          {showConent?<><div className="row h-100 w-100">
                                <div className="col-12 col-md-6">
                                 <div className="signup w-100  ">
                                        <form role="form" className="ba-form w-100" method="post" action="./rtl/confirm-signup.html">
                                            <h1 className='animate-block' style={{ color: "white", fontWeight: "bolder", wordSpacing: "8px", width: "100%",fontSize:"45px" }}>الهيئة العامة للعقار<br />إبدء قصة نجاح جديدة</h1>
                                            <p className='animate-block fs-3 mb-5' style={{ color: "white", fontWeight: "bold", wordSpacing: "6px" }}>استخدم كل أدوات العمل و الخدمات المطلوبة فى مكان واحد تستطيع من خلالة تفعيل طاقتك و إمكنياتك</p>

                                            <div className="ba-card animate-block " style={{ height: "100px" }}>
                                                <div className="card yellow">
                                                    <div className="card-body">
                                                        <i className="fas fa-lightbulb"></i>
                                                        <div className="card-title">
                                                            فكر
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card purple">
                                                    <div className="card-body">
                                                        <i className="fas fa-fingerprint"></i>
                                                        <div className="card-title">
                                                            إبدع
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/auth" className="card gopage">
                                                    <div className="card-body">
                                                        <i className="fas fa-plane-departure"></i>
                                                        <div className="card-title">
                                                            إنطلق
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                                
                            </div></>:<></>} 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WelcomePage