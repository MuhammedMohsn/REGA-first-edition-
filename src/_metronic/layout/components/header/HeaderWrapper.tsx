/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useLayout } from '../../core'
import { Header } from './Header'
import { DefaultTitle } from './page-title/DefaultTitle'
import Background from '../assets/avatars/300-1.jpg'
import img1 from '../../../../app/pages/Home/logos/logo-demo2.png'
import img2 from '../../../../app/pages/Home/logos/word-LOGO-White.png'
import img3 from '../../../../app/pages/Home/logos/logo-demo2-sticky.png'
import img4 from '../../../../app/pages/Home/logos/word-LOGO.png'
import img5 from '../assets/pattern-1.jpg'
import img6 from '../assets/1.png'
import img8 from '../assets/AR.jpg'
import img9 from '../assets//300-25.jpg'
import img10 from '../assets/300-2.jpg'
import img11 from '../assets/Eng.jpg'
// import backGroundPhoto from '../../../layout/components/assets/img/header-bg.jpg'

export function HeaderWrapper() {
  const { config, classes, attributes } = useLayout()
  const { header, aside } = config
   let logout=()=>{
    window.localStorage.removeItem("kt-auth-react-v")
   }
  return (
    <Fragment>
      <div id="kt_header" className="header align-items-stretch header-fixed header-tablet-and-mobile-fixed toolbar-enabled " data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset={{ default: '200px', lg: '300px'  }} >
        <div className="container-xxl d-flex align-items-center">
          <div className="d-flex topbar align-items-center d-lg-none ms-n2 me-3" title="Show aside menu">
            <div className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
              <span className="svg-icon svg-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                  <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                </svg>
              </span>
            </div>
          </div>
          <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
            <a href="/home/dashboard">
              <img alt="Logo" src={img1} className="logo-default h-50px" />
              <img alt="Logo" src={img2} className="logo-default h-30px" />
              <img alt="Logo" src={img3} className="logo-sticky h-50px" />
              <img alt="Logo" src={img4} className="logo-sticky h-30px" />
            </a>
          </div>
          <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
            <div className="d-flex align-items-stretch" id="kt_header_nav">
              <div
                className="header-menu align-items-stretch"
                data-kt-drawer="true"
                data-kt-drawer-name="header-menu"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
                data-kt-swapper="true"
                data-kt-swapper-mode="prepend"
                data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
              >
                <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
                  <a href="/home/dashboard" data-kt-menu-placement="bottom-end" className="menu-item here me-lg-1">
                    <span className="menu-link py-3">
                      <span className="menu-title">الرئيسية</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </span>
                  </a>
                  <a data-kt-menu-placement="bottom-end" className="menu-item menu-lg-down-accordion me-lg-1">
                    <span className="menu-link py-3">
                      <span className="menu-title">مساحه العمل</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </span>
                  </a>
                  <a id="Workspace_List_toggle" data-bs-toggle="tab-content" href="#ServicesWorkSpace" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-end" className="menu-item menu-lg-down-accordion me-lg-1">
                    <span className="menu-link py-3">
                      <span className="menu-title">الخدمات و الادوات</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </span>
                  </a>
                  <a id="Workspace_List_toggle_fav" href="Workspace_List_toggle_fav" data-bs-toggle="tooltip" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-end" className="menu-item menu-lg-down-accordion me-lg-1">
                    <span className="menu-link py-3">
                      <span className="menu-title">مفضلتي</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </span>
                  </a>
                  <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-end" className="menu-item menu-lg-down-accordion me-lg-1">
                    <span className="menu-link py-3">
                      <span className="menu-title">الدعم الفني</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="topbar d-flex align-items-stretch flex-shrink-0">
              <div className="d-flex align-items-stretch ms-1 ms-lg-3">
                <div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                  <div className="d-flex align-items-center" data-kt-search-element="toggle">
                    <div className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px">
                      <span className="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
                    <div data-kt-search-element="wrapper">
                      <form data-kt-search-element="form" className="w-100 position-relative mb-3" >
                        <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                          </svg>
                        </span>

                        <input type="text" className="search-input form-control form-control-flush ps-10" name="search" value="" placeholder="البحث..." data-kt-search-element="input" />

                        <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                          <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                        </span>

                        <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
                          <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                              <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                            </svg>
                          </span>
                        </span>

                        <div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                          <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="المزيد من اعدادات البحث">
                            <span className="svg-icon svg-icon-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                  opacity="0.3"
                                  d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                          <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="البحث المتقدم">
                            <span className="svg-icon svg-icon-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                  d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </form>
                      <div className="separator border-gray-200 mb-6"></div>
                      <div data-kt-search-element="results" className="d-none">
                        <div className="scroll-y mh-200px mh-lg-350px">
                          <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">المستخدمين</h3>
                          <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <img src={`${img9}`} alt="" />
                            </div>

                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">سعود الشهري </span>
                              <span className="fs-7 fw-bold text-muted"> مدير</span>
                            </div>
                          </a>
                          <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <img src={`${img10}`} alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">سلوي العمري</span>
                              <span className="fs-7 fw-bold text-muted">مشرف اول</span>
                            </div>
                          </a>


                          <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">المهام</h3>

                          <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="#" alt="" />
                              </span>
                            </div>

                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">المهمة</span>
                              <span className="fs-7 fw-bold text-muted">بيانات </span>
                            </div>
                          </a>

                          <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">الطلبات</h3>

                          <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      opacity="0.3"
                                      d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                      fill="currentColor"
                                    ></path>
                                    <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-bold">عنوان</span>
                              <span className="fs-7 fw-bold text-muted">نبذة</span>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className="mb-5" data-kt-search-element="main">
                        <div className="d-flex flex-stack fw-bold mb-4">
                          <span className="text-muted fs-6 me-2">ما تم بحثة مؤخراً :</span>
                        </div>

                        <div className="scroll-y mh-200px mh-lg-325px">
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      opacity="0.3"
                                      d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                      fill="currentColor"
                                    ></path>
                                    <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className="d-flex flex-column">
                              <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold"> الطلبات </a>
                              <span className="fs-7 text-muted fw-bold">15 طلب</span>
                            </div>
                          </div>

                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect y="6" width="16" height="3" rx="1.5" fill="currentColor"></rect>
                                    <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor"></rect>
                                    <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor"></rect>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className="d-flex flex-column">
                              <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">المهام</a>
                              <span className="fs-7 text-muted fw-bold">10 مهمات</span>
                            </div>

                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <span className="svg-icon svg-icon-2 svg-icon-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        opacity="0.3"
                                        d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                                        fill="currentColor"
                                      ></path>
                                      <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor"></rect>
                                      <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor"></rect>
                                      <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor"></rect>
                                      <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>

                              <div className="d-flex flex-column">
                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">التقارير</a>
                                <span className="fs-7 text-muted fw-bold">27 تقرير</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-kt-search-element="empty" className="text-center d-none">
                          <div className="pt-10 pb-10">
                            <span className="svg-icon svg-icon-4x opacity-50">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor" />
                                <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor" />
                                <rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="currentColor" />
                                <path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="currentColor" />
                              </svg>
                            </span>
                          </div>
                          <div className="pb-15 fw-bold">
                            <h3 className="text-gray-600 fs-5 mb-2">لا يوجد نتائج</h3>
                            <div className="text-muted fs-7">من فضلك اعد محاولة البحث مرة اخر مستخدما كلمات مختلفة</div>
                          </div>
                        </div>
                      </div>

                      <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                        <h3 className="fw-bold text-dark mb-7">البحث المتقدم</h3>

                        <div className="mb-5">
                          <input type="text" className="form-control form-control-sm form-control-solid" placeholder="كلمة البحث" name="query" />
                        </div>

                        <div className="mb-5">
                          <div className="nav-group nav-group-fluid">
                            <label>
                              <input type="radio" className="btn-check" name="type" value="has" checked={true} />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">الكل</span>
                            </label>

                            <label>
                              <input type="radio" className="btn-check" name="type" value="users" />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"> المستخدمين</span>
                            </label>

                            <label>
                              <input type="radio" className="btn-check" name="type" value="orders" />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">الطلبات</span>
                            </label>

                            <label>
                              <input type="radio" className="btn-check" name="type" value="projects" />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">التقارير</span>
                            </label>
                          </div>
                        </div>

                        <div className="mb-5">
                          <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder=" المرسلة الى" value="" />
                        </div>

                        <div className="mb-5">
                          <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="المشتركون فى البحث" value="" />
                        </div>

                        <div className="mb-5">
                          <div className="nav-group nav-group-fluid">
                            <label>
                              <input type="radio" className="btn-check" name="attachment" value="has" checked={true} />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">مع مرفقات </span>
                            </label>

                            <label>
                              <input type="radio" className="btn-check" name="attachment" value="any" />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">اي شئ</span>
                            </label>
                          </div>
                        </div>

                        {/* <!--<div className="mb-5"> */}
                        <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                          <option value="next">Within the next</option>
                          <option value="last">Within the last</option>
                          <option value="between">Between</option>
                          <option value="on">On</option>
                        </select>
                        {/* </div>--> */}

                        <div className="row mb-8">
                          <div className="col-6">
                            <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
                          </div>

                          <div className="col-6">
                            <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                              <option value="days">ايام</option>
                              <option value="weeks">اسابيع</option>
                              <option value="months">شهور</option>
                              <option value="years">سنين</option>
                            </select>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end">
                          <button type="reset" className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">الغاء</button>
                          <a href="#" className="btn btn-sm fw-bolder btn-primary" data-kt-search-element="advanced-options-form-search">بحث</a>
                        </div>
                      </form>

                      <form data-kt-search-element="preferences" className="pt-1 d-none">
                        <h3 className="fw-bold text-dark mb-7">اعدادات البحث</h3>

                        <div className="pb-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">الطلبات</span>
                            <input className="form-check-input" type="checkbox" value="1" checked={true} />
                          </label>
                        </div>

                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">المهام</span>
                            <input className="form-check-input" type="checkbox" value="1" checked={true} />
                          </label>
                        </div>

                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">التقارير</span>
                            <input className="form-check-input" type="checkbox" value="1" />
                          </label>
                        </div>

                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">الارشيف</span>
                            <input className="form-check-input" type="checkbox" value="1" checked={true} />
                          </label>
                        </div>

                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">المستخدمين</span>
                            <input className="form-check-input" type="checkbox" value="1" />
                          </label>
                        </div>

                        <div className="d-flex justify-content-end pt-7">
                          <button type="reset" className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">الغاء</button>
                          <button type="submit" className="btn btn-sm fw-bolder btn-primary">حفظ التغييرات</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="d-flex align-items-center ms-1 ms-lg-3">
                  <div className="btn btn-icon btn-active-light-primary position-relative btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon svg-icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="currentColor" />
                        <path
                          d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
                    <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{ backgroundImage: ` url(${img5})` }}>
                      <h3 className="text-white fw-bold px-9 mt-10 mb-6">الاشعارات <span className="fs-8 opacity-75 ps-3">24 اشعار</span></h3>

                      <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
                        <li className="nav-item">
                          <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">الرسائل</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">التحديثات</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">الطلبات</a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content">
                      <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                        <div className="scroll-y mh-325px my-5 px-8">
                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center">
                              <div className="mb-0 me-2">
                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder"> عنوان الرسالة</a>
                                <div className="text-gray-400 fs-7">تفاصيل الرسالة</div>
                              </div>
                            </div>
                            <span className="badge badge-light fs-8">30 mins</span>
                          </div>

                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center">
                              <div className="mb-0 me-2">
                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder"> عنوان الرسالة</a>
                                <div className="text-gray-400 fs-7">تفاصيل الرسالة</div>
                              </div>
                            </div>

                            <span className="badge badge-light fs-8">1 hr</span>
                          </div>

                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center">
                              <div className="mb-0 me-2">
                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder"> عنوان الرسالة</a>
                                <div className="text-gray-400 fs-7">تفاصيل الرسالة</div>
                              </div>
                            </div>

                            <span className="badge badge-light fs-8">2 hr</span>
                          </div>

                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center">
                              <div className="mb-0 me-2">
                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder"> عنوان الرسالة</a>
                                <div className="text-gray-400 fs-7">تفاصيل الرسالة</div>
                              </div>
                            </div>

                            <span className="badge badge-light fs-8">3 hr</span>
                          </div>
                        </div>

                        <div className="py-3 text-center border-top">
                          <a href="#" className="btn btn-color-gray-600 btn-active-color-primary">عرض الكل </a>
                        </div>
                      </div>

                      <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                        <div className="d-flex flex-column px-9">
                          <div className="pt-10 pb-0">
                            <h3 className="text-dark text-center fw-bolder">التحديث</h3>

                            <div className="text-center text-gray-600 fw-bold pt-1">يرجي تحديث البيانات الخاصة بك على الموقع</div>

                            <div className="text-center mt-5 mb-9">
                              <a href="#" className="btn btn-sm btn-primary px-6">تحديث</a>
                            </div>
                          </div>

                          <div className="text-center px-4">
                            <img className="mw-100 mh-200px" alt="image" src={`${img6}`} />
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                        <div className="scroll-y mh-325px my-5 px-8">
                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center me-2">
                              <span className="w-100px badge badge-light-success me-4">تم استلام الطلب</span>
                              <a href="#" className="text-gray-800 text-hover-primary fw-bold">رقم الطلب</a>
                            </div>

                            <span className="badge badge-light fs-8">Just now </span>
                          </div>

                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center me-2">
                              <span className="w-100px badge badge-light-danger me-4">تم الرفض</span>

                              <a href="#" className="text-gray-800 text-hover-primary fw-bold"> رقم الطلب</a>
                            </div>

                            <span className="badge badge-light fs-8">2 hrs</span>
                          </div>

                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center me-2">
                              <span className="w-100px badge badge-light-success me-4">تم الانتهاء</span>
                              <a href="#" className="text-gray-800 text-hover-primary fw-bold"> رقم الطلب</a>
                            </div>

                            <span className="badge badge-light fs-8">5 hrs</span>
                          </div>

                          <div className="d-flex flex-stack py-4">
                            <div className="d-flex align-items-center me-2">
                              <span className="w-100px badge badge-light-warning me-4"> تحت المعالجة</span>
                              <a href="#" className="text-gray-800 text-hover-primary fw-bold"> رقم الطلب</a>

                            </div>

                            <span className="badge badge-light fs-8">2 days</span>
                          </div>
                        </div>

                        <div className="py-3 text-center border-top">
                          <a href="#" className="btn btn-color-gray-600 btn-active-color-primary">عرض الكل </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="d-flex align-items-center ms-1 ms-lg-3">
                  <a href="#" className="btn btn-icon btn-active-light-primary position-relative btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon svg-icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                <div className="d-flex align-items-center ms-1 ms-lg-3">
                  <div className="btn btn-icon btn-active-light-primary position-relative btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" id="kt_drawer_chat_toggle">
                    <span className="svg-icon svg-icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                        <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                        <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                  </div>
                </div>

                <div className="d-flex align-items-center ms-1 ms-lg-3">
                  <a href="#" className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                    <i className="fonticon-sun fs-2"></i>
                    <i className="fonticon-moon fs-2"></i>
                  </a>

                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-bold py-4 fs-6 w-200px" data-kt-menu="true">
                    <div className="menu-item px-3 my-1">
                      <a href="index.html" className="menu-link px-3">
                        <span className="menu-icon">
                          <i className="fonticon-sun fs-2"></i>
                        </span>
                        <span className="menu-title">Light</span>
                      </a>
                    </div>

                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        <span className="menu-icon">
                          <i className="fonticon-moon fs-2"></i>
                        </span>
                        <span className="menu-title">Dark</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center me-n3 ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                  <div className="btn btn-icon btn-active-light-primary btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-start">
                    <img className="h-30px w-30px rounded" src={`${Background}`} alt="" />
                  </div>
                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                    <div className="menu-item px-3">
                      <div className="menu-content d-flex align-items-center px-3">
                        <div className="symbol symbol-50px me-5">
                          <img alt="Logo" src={`${Background}`} />
                        </div>
                        <div className="d-flex flex-column">
                          <div className="fw-bolder d-flex align-items-center fs-5">تركي العطاالله</div>
                          <a href="#" className="fw-bold text-muted text-hover-primary fs-7">Talattaalla@rega.com</a>
                        </div>
                      </div>
                    </div>
                    <div className="separator my-2"></div>
                    <div className="menu-item px-5">
                      <a href="#" className="menu-link px-5">الملف الشخصي </a>
                    </div>
                    <div className="menu-item px-5">
                      <a href="#" className="menu-link px-5">
                        <span className="menu-text">طلباتي </span>
                        <span className="menu-badge">
                          <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                        </span>
                      </a>
                    </div>

                    <div className="menu-item px-5">
                      <a href="#" className="menu-link px-5">مفضلتي </a>
                    </div>
                    <div className="separator my-2"></div>
                    <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                      <a href="#" className="menu-link px-5">
                        <span className="menu-title position-relative"
                        >اللغة <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">عربي <img className="w-15px h-15px rounded-1 ms-2" src={`${img8}`} alt="" /></span
                        ></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link d-flex px-5 active">
                            <span className="symbol symbol-20px me-4"> <img className="rounded-1" src={`${img11}`} alt="" /> </span>English</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link d-flex px-5">
                            <span className="symbol symbol-20px me-4">
                              <img className="rounded-1" src={`${img8}`} alt="" />
                            عربي
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="menu-item px-5 my-1">
                      <a href="#" className="menu-link px-5"> اعدادات الحساب</a>
                    </div>

                    <div className="menu-item px-5">
                      <a href="/logout" className="menu-link px-5" onClick={logout} >تسجيل خروج</a>
                    </div>

                    <div className="separator my-2"></div>

                    <div className="menu-item px-5">
                      <div className="menu-content px-5">
                        <label className="form-check form-switch form-check-custom form-check-solid pulse pulse-success" htmlFor="kt_user_menu_dark_mode_toggle">
                          <input className="form-check-input w-30px h-20px" type="checkbox" value="1" name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="#" />
                          <span className="pulse-ring ms-n1"></span>
                          <span className="form-check-label text-gray-600 fs-7"> الوضع الليلي</span>
                        </label>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
  )
}
