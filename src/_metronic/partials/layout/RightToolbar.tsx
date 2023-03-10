import {FC} from 'react'
import {DemosToggleDrawer} from './demos-drawer/DemosToggleDrawer'
import {ToggleHelpDrawer} from './help-drawer/ToggleHelpDrawer'
import {DemosDrawer} from './demos-drawer/DemosDrawer'
import {HelpDrawer} from './help-drawer/HelpDrawer'
import React from 'react'
const RightToolbar: FC = () => {
  return (
    <>
      <div className='engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-20 gap-2'>
        {/* زرار صندوق الادوات */}
        <DemosToggleDrawer />
        {/* زرار مفضلتي */}
       <button className='text-dark btn btn-dark'>asssssssssssssss</button>
        <ToggleHelpDrawer />
      </div>

    
    </>
  )
}

export {RightToolbar}
