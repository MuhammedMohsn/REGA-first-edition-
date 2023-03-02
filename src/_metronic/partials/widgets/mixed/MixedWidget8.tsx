/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef} from 'react'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
}

const MixedWidget8: React.FC<Props> = ({className, chartColor, chartHeight}) => {

  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  function navigateFromIndexToWorkSpace() {
    let userName = localStorage.getItem("userName");
    window.location.href = `02-WorkArea/WorkSpace/${userName}/WorkSpace.html`;
  }
  return (
    <div className={`card`} >
      <div className="card card-xl-stretch mb-xl-3" >
    <div className="card-header border-0 py-5">
      <h3 className="card-title align-items-start flex-column">
        <span className="card-label fw-bolder fs-3 mb-1 text-black">الوصول السريع</span>
        <span className="text-muted fw-bold fs-7 ">روابط مهمة </span>
      </h3>
      <div className="card-toolbar">
        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
          <span className="svg-icon svg-icon-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
              </g>
            </svg>
          </span>
        </button>
        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
          <div className="menu-item px-3">
            <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
          </div>
     
          <div className="menu-item px-3">
            <a href="#" className="menu-link px-3">Create Invoice</a>
          </div>
       
          <div className="menu-item px-3">
            <a href="#" className="menu-link flex-stack px-3">Create Payment <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
          </div>
      
          <div className="menu-item px-3">
            <a href="#" className="menu-link px-3">Generate Bill</a>
          </div>
     
          <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="left-end">
            <a href="#" className="menu-link px-3">
              <span className="menu-title">Subscription</span>
              <span className="menu-arrow"></span>
            </a>
            <div className="menu-sub menu-sub-dropdown w-175px py-4">
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">Plans</a>
              </div>
          
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">Billing</a>
              </div>
            
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">Statements</a>
              </div>
           
              <div className="separator my-2"></div>
            
              <div className="menu-item px-3">
                <div className="menu-content px-3">
                  <label className="form-check form-switch form-check-custom form-check-solid">
                    <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked={true} name="notifications" />
           
                    <span className="form-check-label text-muted fs-6">Recuring</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
      
          <div className="menu-item px-3 my-1">
            <a href="#" className="menu-link px-3">Settings</a>
          </div>
        </div>
      
      </div>
    </div>
 
    <div className="card-body d-flex flex-column p-0">
      <div className="card-p mt-n5 position-relative">
        <div className="row g-0">
          <a href="#" className="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7 bg-hover-warning text-hover-white">
            <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect y="6" width="16" height="3" rx="1.5" fill="currentColor" />
                <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor" />
                <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor" />
              </svg>
            </span>
            <span className="text-warning fw-bold fs-6">المهام</span>
          </a>
       
          <a onClick={navigateFromIndexToWorkSpace} className="col bg-light-primary px-6 py-8 rounded-2 mb-7 bg-hover-primary text-hover-white">
            <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
                <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
              </svg>
            </span>
            <span className="text-primary fw-bold fs-6">مساحة العمل</span>
          </a>
        </div>
   
        <div className="row g-0">
          <a href="#" className="col bg-light-danger px-6 py-8 rounded-2 me-7 mb-7 bg-hover-danger text-hover-white">
            <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  opacity="0.3"
                  d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                  fill="currentColor"
                ></path>
                <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="text-danger fw-bold fs-6 mt-2"> الطلبات</span>
          </a>
     
          <a href="#" className="col bg-light-success px-6 py-8 rounded-2 mb-7 bg-hover-success text-hover-white">
            <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor"></path>
                <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="text-success fw-bold fs-6 mt-2"> البريد الالكتروني</span>
          </a>
        </div>
   
        <div className="row g-0">
          <a href="#" className="col bg-light-primary px-6 py-8 rounded-2 me-7 bg-hover-primary text-hover-white">
            <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
              <i className="bi bi-clock-history fs-3x"></i>
            </span>
            <span className="text-primary fw-bold fs-6">المستعرض مؤخراً</span>
          </a>
          <a href="#" className="col bg-light-warning px-6 py-8 rounded-2 bg-hover-warning text-hover-white">
            <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
              <i className="bi bi-star-fill fs-3x"></i>
            </span>
            <span className="text-warning fw-bold fs-6">مفضلتي </span>
          </a>
        </div>
      </div>
    </div>
  </div>
    </div>
    
  )
}



export {MixedWidget8}
