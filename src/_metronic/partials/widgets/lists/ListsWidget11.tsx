import React, { Fragment } from 'react'

function ListWidget11() {
    return (
        <Fragment>
            <div className="card card-rounded p-10 mb-15">
                <h3 className="card-title align-items-start flex-column mb-5">
                    <span className="card-label fw-bolder fs-3 mb-1">قنوات التفاعل </span><br />
                    <span className="text-muted mt-1 fw-bold fs-7"> التواصل والتفاعل مع المستفيدين </span>
                </h3>
                <div className="d-flex align-items-center mt-5 mb-6">
                    <i className="bi bi-calendar-check text-primary fs-1 me-5"></i>
                    <div className="d-flex flex-column">
                        <a href="#" className="link-primary fs-4"> الاستبيانات </a>
                        <div className="fw-bold">
                            <span className="text-muted">احدث الاستبيانات </span>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-6">
                    <i className="bi bi-chat-square-text-fill text-primary fs-1 me-5"></i>
                    <div className="d-flex flex-column">
                        <a href="#" className="link-primary fs-4">الدعم الفني والمساعدة</a>
                        <div className="fw-bold">
                            <span className="text-muted">التواصل مع الدعم الفني</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-6">
                    <i className="bi bi-pencil text-primary fs-1 me-5"></i>
                    <div className="d-flex flex-column">
                        <a href="#" className="link-primary fs-4"> استطلاعات الرأي</a>
                        <div className="fw-bold">
                            <span className="text-muted"> التصويتات واستطلاعات الرأي</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <i className="bi bi-check2-square text-primary fs-1 me-5"></i>

                    <div className="d-flex flex-column">
                        <a href="#" className="link-primary fs-4"> صوتك مسموع</a>
                        <div className="fw-bold">
                            <span className="text-muted">البلاغات والشكاوي </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>)
}

export default ListWidget11