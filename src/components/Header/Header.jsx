import React from 'react'
import MainHeader from './MainHeader/MainHeader'
import SubHeader from './SubHeader/SubHeader'
import BannerHeader from './BannerHeader/BannerHeader'
import HeaderMobile from '../HeaderMobile/HeaderMobile'

const Header = () => {
  return (
    <>
    <HeaderMobile/>
    <MainHeader/>
    <SubHeader/>
    <BannerHeader/>
    </>
  )
}

export default Header
