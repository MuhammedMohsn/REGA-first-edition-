import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title='dashboard' to='/dashboard' />
      <MenuItem title='الرئيسية' to='/home'/>
      <MenuItem title='مساحه العمل' to='#' />
      <MenuItem title='الخدمات والأدوات' to='#' />
      <MenuItem title='مفضلتي' to='#' />
      <MenuItem title='الدعم الفني' to='#' />
      
     
    </>
  )
}
