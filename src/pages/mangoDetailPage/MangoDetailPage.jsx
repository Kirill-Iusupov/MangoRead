import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { fetchMangaDetail } from '../../redux/slices/mangaDetailSlice'
import {fetchGenres} from '../../redux/slices/genresSlice'

const MangoDetailPage = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  const {mangaInfo} = useSelector(state => state.mangaDetailReducer)
  const {genres} = useSelector(state => state.genresReducer)

  console.log(genres)
  useEffect(()=>{
    dispatch(fetchMangaDetail(id))
    dispatch(fetchGenres())
  }, [dispatch, id])

  const descrip = () =>{
    return {__html:mangaInfo.description}
  }

  return (
    <Container className="w-[1240px] px-0" maxWidth={false}>
      <div>
        <span className='block w-[328px] h-[328ox] rounded-[16px]'></span>
        <h2>{mangaInfo.ru_name}</h2>
        <p>Информация:</p>
        <p>Тип: {mangaInfo.type}</p>
        <p>Год: {mangaInfo.year}</p>
        <p>Жанр: </p>
      </div>
      <div dangerouslySetInnerHTML={descrip()}/> 
      <div></div>
    </Container>
  )
}

export default MangoDetailPage