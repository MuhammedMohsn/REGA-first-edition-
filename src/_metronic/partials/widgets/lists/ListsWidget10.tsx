import React, { Fragment } from 'react'
import Background from "../assets/media/News/topic.jpg"
function ListWidget10() {
    return (
        <Fragment>
               <div className="card mb-5 mb-xl-8">
                    <div className="card-header border-0 pt-5">
                      <h3 className="card-title align-items-start flex-column mb-4">
                        <span className="card-label fw-bolder fs-3 mb-1">ملتقي الهيئة</span>
                        <span className="text-muted mt-1 fw-bold fs-7">احدث الموضوعات</span>
                      </h3>
                      <div className="card-toolbar">
                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          <span className="svg-icon svg-icon-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                              </g>
                            </svg>
                          </span>
                        </button>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                          <div className="menu-item px-3">
                            <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">ملتقي الهيئة</div>
                          </div>

                          <div className="separator mb-3 opacity-75"></div>

                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">عرض التفاصيل</a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3"> الدخول على الملتقي </a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="card-body pb-0">
                      <div className="mb-5">
                        <div className="bgi-no-repeat bgi-size-cover rounded min-h-100px mb-5" style={{backgroundImage: `url(${Background})`, backgroundPosition: "center"}}></div>
                        <div className="ps-lg-6 mb-4">
                          <div className="mb-6">
                            <a href="#" className="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">العنوان الخاص بموضوع الملتقي</a>
                            <div className="fw-bold fs-6 mt-4 text-gray-600 text-dark">جزء من تفاصيل موضوع الملتقي سواء موضوع تعليمي او توعوي او ثقافي او خاص بالهيئة</div>
                          </div>
                        </div>
                      </div>

                      <div className="separator mb-2"></div>
                      <div className="d-flex flex-stack flex-wrap mb-6">
                        <div className="d-flex align-items-center pe-2">
                          <div className="fs-7 fw-bolder">
                            <span className="text-muted">14 مارس 2022</span>
                          </div>
                        </div>

                        <span className="badge badge-light-primary fw-bolder my-2">ثقافي</span>
                      </div>
                    </div>
                  </div>

        </Fragment>)
}

export default ListWidget10