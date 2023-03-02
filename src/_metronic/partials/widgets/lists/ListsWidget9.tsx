import React, { Fragment } from 'react'
import img1 from '../assets/media/avatars/300-6.jpg'
import img2 from '../assets/media/avatars/300-5.jpg'
import img3 from '../assets/media/avatars/300-10.jpg'
import img4 from '../assets/media/avatars/300-9.jpg'
import img5 from '../assets/media/avatars/300-6.jpg'
import img6 from '../assets/media/avatars/300-5.jpg'
import img7 from '../assets/media/avatars/300-10.jpg'
import img8 from '../assets/media/avatars/300-9.jpg'
import img9 from '../assets/media/avatars/300-6.jpg'
import img10 from '../assets/media/avatars/300-5.jpg'
import img11 from '../assets/media/avatars/300-10.jpg'
import img12 from '../assets/media/avatars/300-9.jpg'

type Props = {
    className?: string
}
const ListsWidget9: React.FC<Props> = () => {
    return (
        <Fragment>
            <div className={`card mb-5  mb-xl-3 `}>
                <div className="card-body pt-5">
                    <div id="kt_security_recent_alerts" className="carousel carousel-custom carousel-stretch slide" data-bs-ride="carousel" data-bs-interval="8000">
                        <div className="d-flex flex-stack align-items-center flex-wrap mt-4">
                            <h3 className="card-title align-items-start flex-column mb-4">
                                <span className="card-label fw-bolder fs-3 mb-1">الاجتماعات </span><br />
                                <span className="text-muted mt-1 fw-bold fs-7"> جدول الاجتماعات </span>
                            </h3>

                            <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                <li data-bs-target="#kt_security_recent_alerts" data-bs-slide-to="0" className="ms-1 active" aria-current="true"></li>
                                <li data-bs-target="#kt_security_recent_alerts" data-bs-slide-to="1" className="ms-1"></li>
                                <li data-bs-target="#kt_security_recent_alerts" data-bs-slide-to="2" className="ms-1"></li>
                            </ol>
                        </div>
                        <div className="carousel-inner pt-4">
                            <div className="carousel-item active">
                                <div className="carousel-wrapper">
                                    <div className="d-flex flex-column flex-grow-1">
                                        <a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">الاجتماع الاول</a>
                                        <p className="text-gray-600 fs-6 fw-bold pt-3 mb-0">اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع</p>
                                    </div>
                                    <div className="d-flex flex-column mt-5">
                                        <div className="text-dark me-2 fw-bolder pb-4">اعضاء الاجتماع</div>
                                        <div className="d-flex">
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="سلوي العمري">
                                                <img src={img1} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="سعود الشهري">
                                                <img src={img2} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px" data-bs-toggle="tooltip" title="" data-bs-original-title="سارة الحافظ">
                                                <img src={img3} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="تركي العطاالله">
                                                <img src={img4} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack pt-6">
                                        <span className="badge badge-light-primary fs-7 fw-bolder me-2">10 اكتوبر 2022</span>
                                        <a href="#" className="btn btn-sm btn-light">التفاصيل </a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-wrapper">
                                    <div className="d-flex flex-column flex-grow-1">
                                        <a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">الاجتماع الثاني</a>
                                        <p className="text-gray-600 fs-6 fw-bold pt-3 mb-0">اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع</p>
                                    </div>
                                    <div className="d-flex flex-column mt-5">
                                        <div className="text-dark me-2 fw-bolder pb-4">اعضاء الاجتماع</div>
                                        <div className="d-flex">
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="سلوي العمري">
                                                <img src={img5} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="سعود الشهري">
                                                <img src={img6} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px" data-bs-toggle="tooltip" title="" data-bs-original-title="سارة الحافظ">
                                                <img src={img7} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="تركي العطاالله">
                                                <img src={img8} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack pt-6">
                                        <span className="badge badge-light-primary fs-7 fw-bolder me-2">5 مايو 2022</span>
                                        <a href="#" className="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5">التفاصيل</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-wrapper">
                                    <div className="d-flex flex-column flex-grow-1">
                                        <a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">الاجتماع الثالث</a>
                                        <p className="text-gray-600 fs-6 fw-bold pt-3 mb-0">اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع اجتماع بخصوص مناقشة موضوع</p>
                                    </div>
                                    <div className="d-flex flex-column mt-5">
                                        <div className="text-dark me-2 fw-bolder pb-4">اعضاء الاجتماع</div>
                                        <div className="d-flex">
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="سلوي العمري">
                                                <img src={img9} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="سعود الشهري">
                                                <img src={img10} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px" data-bs-toggle="tooltip" title="" data-bs-original-title="سارة الحافظ">
                                                <img src={img11} alt="" />
                                            </a>
                                            <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="" data-bs-original-title="تركي العطاالله">
                                                <img src={img12} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack pt-6">
                                        <span className="badge badge-light-primary fs-7 fw-bolder me-2">11 سبتمبر 2021</span>
                                        <a href="#" className="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5">التفاصيل</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ListsWidget9