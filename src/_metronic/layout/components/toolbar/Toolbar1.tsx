/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useState} from 'react'
import {KTSVG} from '../../../helpers'
import {CreateAppModal} from '../../../partials'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'
import React,{Fragment} from 'react'
const Toolbar1 = () => {
  const {classes} = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  return (
    <Fragment>
        <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
            <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap">
              <div className="page-title d-flex flex-column me-3">
                <h1 className="d-flex text-white fw-bolder my-1 fs-1 pe-5">الرئيسية</h1>
              </div>
       
              <div className="d-flex align-items-center py-3 py-md-1"></div>
            </div>
          </div>
    </Fragment>
  )
}

export {Toolbar1}
