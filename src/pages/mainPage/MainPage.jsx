import { ThemeProvider } from '@emotion/react'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {Routes, Route} from "react-router-dom"
import {theme} from "../../mui"
import MangoListPage from "../mangoListPage/MangoListPage"
import MangoDetailPage from "../mangoDetailPage/MangoDetailPage"

const MainPage = () => {
  return (
    <>
        <ThemeProvider theme={theme}>
            <Header />
            <Routes>
                <Route index element={ <MangoListPage />}/>
                <Route path='/detail' element={ <MangoDetailPage />}/>
            </Routes>
            <Footer />
        </ThemeProvider>
    </>
  )
}

export default MainPage