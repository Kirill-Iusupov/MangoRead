import React from 'react'
import {Link} from "react-router-dom"

const MangaCard = ( {mangaInfo} ) => {


  return (
    <>
    <Link to={`/detail/${mangaInfo.id}`}>
      <span style={ {backgroundImage: `url(${mangaInfo.image})`} } 
            className='block w-[190px] h-[220px] cursor-pointer 
                      rounded-[15px] border border-solid border-black 
                      relative bg-cover bg-no-repeat'>
          <div className = "absolute bottom-[10px] left-[10px]">
              <p>Год: {mangaInfo.issue_year}</p>
              <p>{mangaInfo.ru_name}</p>
          </div>
      </span>
    </Link>
  
    </>
  )
}

export default MangaCard