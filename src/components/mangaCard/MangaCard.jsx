import React from 'react'

const MangaCard = ( {mangaInfo} ) => {

    console.log("mangaInfo", mangaInfo)
    console.log("image => ", mangaInfo.image)

  return (
    <>
        <span style={ {backgroundImage: `url(${mangaInfo.image})`} } className='block my-[20px] w-[190px] h-[220px] rounded-[15px] border border-solid border-black relative bg-contain bg-center bg-no-repeat'>
            <div className = "absolute bottom-[10px] left-[10px]">
                <p>Год: {mangaInfo.issue_year}</p>
                <p>{mangaInfo.ru_name}</p>
            </div>
        </span>
    </>
  )
}

export default MangaCard