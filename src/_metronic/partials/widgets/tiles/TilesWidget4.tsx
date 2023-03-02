/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'
import Background from '../assets/banner.jpg'
type Props = {
  className?: string
}
const TilesWidget4 = ({ className }: Props) => {
  return (
    <div className="col-xl-12">
      <div className="card h-175px bgi-no-repeat bgi-size-contain card-xl-stretch mb-5 mb-xl-8" style={{ height: "155px !important", backgroundImage: `url(${Background})` }}>
      </div>
    </div>
  )
}

export { TilesWidget4 }
