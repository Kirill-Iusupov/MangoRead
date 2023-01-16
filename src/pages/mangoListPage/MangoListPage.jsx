import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MangaCard from '../../components/mangaCard/MangaCard'
import { getMangaList } from '../../redux/slices/mangaListSlice'

const MangoListPage = () => {


  const dispatch = useDispatch()

  const {mangaList, isLoading } = useSelector(state => state.mangaListReducer)

  useEffect(() => {
    dispatch(getMangaList())
  }, [dispatch])

  return (
    <div className='bg-[gray]'>
        <Container>
          {isLoading ? <h2>Loading...</h2> : <div className='flex flex-wrap justify-between'>
            {mangaList.map(mangaItem => 
              <MangaCard  key = {mangaItem.id} mangaInfo = {mangaItem}/>
            )}
          </div> }
          
          
        </Container>
    </div>
  )
}

export default MangoListPage