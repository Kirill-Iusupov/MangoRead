import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {Routes, Route} from "react-router-dom"
import MangoListPage from "../mangoListPage/MangoListPage"
import MangoDetailPage from "../mangoDetailPage/MangoDetailPage"

const MainPage = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route index element={ <MangoListPage />}/>
          <Route path='/detail/:id' element={ <MangoDetailPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default MainPage