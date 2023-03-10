/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import { KTSVG } from '../../../helpers'
import { Dropdown1 } from '../../content/dropdown/Dropdown1'

type Props = {
  className?: string
}

const ListsWidget3: React.FC<Props> = ({ className }) => {
  return (
    <Fragment>
      <div className="card card-xl-stretch mb-xl-3">
        <div className="card-header border-0">
          <h3 className="card-title fw-bolder text-dark">قائمة المهام</h3>
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
                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">اعدادات قائمة المهام</div>
              </div>

              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">اضافة مهمة جديدة </a>
              </div>

              <div className="menu-item px-3 my-1">
                <a href="#" className="menu-link px-3">الاعدادات</a>
              </div>
            </div>

          </div>
        </div>

        <div className="card-body pt-2">
          <div className="d-flex align-items-center mb-8">
            <span className="bullet bullet-vertical h-40px bg-success"></span>

            <div className="form-check form-check-custom form-check-solid mx-5">
              <input className="form-check-input" type="checkbox" value="" />
            </div>

            <div className="flex-grow-1">
              <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">المهمة الاولي</a>
              <span className="text-muted fw-bold d-block">منذ يوم</span>
            </div>
            <span className="badge badge-light-success fs-8 fw-bolder">جديد</span>
          </div>

          <div className="d-flex align-items-center mb-8">
            <span className="bullet bullet-vertical h-40px bg-primary"></span>

            <div className="form-check form-check-custom form-check-solid mx-5">
              <input className="form-check-input" type="checkbox" value="" />
            </div>

            <div className="flex-grow-1">
              <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">المهمة الثانية</a>
              <span className="text-muted fw-bold d-block">منذ يومين</span>
            </div>
            <span className="badge badge-light-primary fs-8 fw-bolder">جديد</span>
          </div>

          <div className="d-flex align-items-center mb-8">
            <span className="bullet bullet-vertical h-40px bg-warning"></span>

            <div className="form-check form-check-custom form-check-solid mx-5">
              <input className="form-check-input" type="checkbox" value="" />
            </div>

            <div className="flex-grow-1">
              <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">المهمة الثالثة</a>
              <span className="text-muted fw-bold d-block">منذ 3 ايام </span>
            </div>
            <span className="badge badge-light-warning fs-8 fw-bolder">جديد</span>
          </div>

          <div className="d-flex align-items-center mb-8">
            <span className="bullet bullet-vertical h-40px bg-primary"></span>

            <div className="form-check form-check-custom form-check-solid mx-5">
              <input className="form-check-input" type="checkbox" value="" />
            </div>

            <div className="flex-grow-1">
              <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">المهمة الرابعة</a>
              <span className="text-muted fw-bold d-block">منذ 3 ايام</span>
            </div>
            <span className="badge badge-light-primary fs-8 fw-bolder">جديد</span>
          </div>

          <div className="d-flex align-items-center mb-8">
            <span className="bullet bullet-vertical h-40px bg-danger"></span>

            <div className="form-check form-check-custom form-check-solid mx-5">
              <input className="form-check-input" type="checkbox" value="" />
            </div>

            <div className="flex-grow-1">
              <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">المهمة الخامسة</a>
              <span className="text-muted fw-bold d-block">منذ 5 ايام</span>
            </div>
            <span className="badge badge-light-danger fs-8 fw-bolder">جديد</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export { ListsWidget3 }
