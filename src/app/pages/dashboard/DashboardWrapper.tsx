import { useIntl } from 'react-intl'
import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget10,
  MixedWidget8,
  TilesWidget1,
  TilesWidget4,
  TilesWidget2,
  TilesWidget5,
  TilesWidget3,
} from '../../../_metronic/partials/widgets'
import TilesWidget6 from '../../../_metronic/partials/widgets/tiles/TilesWidget6'
import TilesWidget7 from '../../../_metronic/partials/widgets/tiles/TilesWidget7'
import ListsWidget9 from '../../../_metronic/partials/widgets/lists/ListsWidget9'
import ListsWidget10 from '../../../_metronic/partials/widgets/lists/ListsWidget10'
import ListsWidget11 from '../../../_metronic/partials/widgets/lists/ListsWidget11'
import '../../../_metronic/assets/sass/StyleAR.scss'
import '../../../_metronic/assets/sass/style.bundle.rtl.scss'

const DashboardPage = () => (
  <>

  <div className='container' style={{width:"100% !important"}}>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>

      <div className='col-xl-8'>
        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
          <div className='col-xl-3'>
            {/* اجمالي عدد الطلبات وعايزين هنا لون خلفيه وايقونه ما  */}
            <TilesWidget5
              className='card-xxl-stretch bg-primary'
              svgIcon='/media/icons/duotune/general/gen025.svg'
              titleClass='text-white'
              descriptionClass='text-white'
              iconClass='svg-icon-white'
              title='790'
              description='اجمالي عدد الطلبات علي البوابه '
            />
          </div>
          <div className='col-xl-3'>
            {/* الويدجت اللي موجوده جمبها  */}
            <TilesWidget5
              className='card-xxl-stretch bg-body'
              svgIcon='/media/icons/duotune/general/gen002.svg'
              titleClass='text-dark'
              descriptionClass='text-muted'
              iconClass='svg-icon-success'
              title='8,600'
              description='اجمالي عدد المستخدمين'
            />
          </div>
          <div className='col-xl-6'>
            <TilesWidget4 className='card-xl-stretch' />

          </div>
        </div>
        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
          <div className='col-xl-12'>
            <TilesWidget6 />
          </div>
        </div>
      </div>

    </div>

 
    
    {/* begin:: SECOND Row */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        {/* ده الجزء المسؤل عن ال قائمه المهام  */}
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        {/* ده الجزء المسؤل عن الطلبات  */}
        <TilesWidget7 />
      </div>
    </div>
    {/* end::Row */}

    {/* begin:third Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-4'>
        {/* ده الجزء المسؤل عن الاجتماعات وجدول الاجتماعات */}
        <ListsWidget9 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-4'>
        {/* ده الجزء المسؤل عن ملتقي الهيئه  */}
        <ListsWidget10 />
      </div>
      <div className='col-xl-4'>
        {/* ده الجزء المسؤل عن قنوات التفاعل  */}
        <ListsWidget11  />
      </div>
    </div>
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
