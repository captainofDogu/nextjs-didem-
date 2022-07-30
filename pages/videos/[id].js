// dosya düzeninde [id].js şeklinde yazmamız önemli
import React from 'react'
import { URL } from '../../enviroment'
const VideoDetails = ({ video }) => {
    console.log(video)
  return (
    <div>
        <h3>{video.name}</h3>
        <p>{video.content}</p>
    </div>
  )
}

//url deki props yakalamak için bi fonk daha yazıcaz 
/* export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()

    return {
        props: {
            post,
        },
    };
};
 */

// 2 yol:
// getstaticprops bana kaç tane html sayfası yaratmam gerektiğini söylüyor 
export const getStaticPaths = async () => {
    const res = await fetch(`${URL}/api/videos`)

    const videos = await res.json();

    const paths = videos.map((video) => {
        return {
            params: { id: video.id.toString()    }, // idleri string olarak istediğini söylüyor 
        } // burda gönderdiğimiz parametrelere göre önceden oluşturuyor 
    }) 

    console.log("path",paths)
    /*
     path [
  { params: { id: '1' } },
  { params: { id: '2' } },
  { params: { id: '3' } }
] */
    return { // path alacagı değer bir dizi olmalı
        paths, // buranın nihayetinde kaç tane html sayfası oluşturmam gerektiğini biliyorum şimdi post'ların gerçek verilerini nasıl alabilirim
        fallback: true, // fallback false yaparsam örn localhost:3000/posts/123123 abuk subuk sayı girersek 404 sayfasını gönderir true yaparsak server hatası alırız 
    }
}

export const getStaticProps = async (context) => {
    console.log("context1",context)
    /* 
    context1 {
  params: { id: '1' },
  locales: undefined,
  locale: undefined,
  defaultLocale: undefined
}
    */
    const res = await fetch(`${URL}/api/videos/${context.params.id}`)

    const video = await res.json();

    return {
        props: {
            video,
        },
    }
}


export default VideoDetails  