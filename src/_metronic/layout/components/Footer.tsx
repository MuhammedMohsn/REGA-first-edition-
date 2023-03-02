/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, Fragment} from 'react'
import {useLayout} from '../core'
import React from 'react'
const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <Fragment>
         <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
            <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
              <div className="text-dark order-2 order-md-1">
                <a href="https://www.rega.gov.sa/" target="_blank" className="text-gray-800 text-hover-primary">جميع الحقوق محفوظة <b>للهيئة العامة للعقار</b></a>
                <span className="text-muted fw-bold me-1">© 2022</span>
              </div>
              <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                <li className="menu-item">
                  <a href="" target="_blank" className="menu-link px-2">الشروط والاحكام</a>
                </li>
                <li className="menu-item">
                  <a href="#" target="_blank" className="menu-link px-2">سياسة الاستخدام</a>
                </li>
                <li className="menu-item">
                  <a href="" target="_blank" className="menu-link px-2">دليل المستخدم</a>
                </li>
              </ul>
            </div>
          </div>
    </Fragment>
  )
}

export {Footer}
