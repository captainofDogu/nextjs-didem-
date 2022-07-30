// dosya düzeninde [id].js şeklinde yazmamız önemli
import React from 'react'

const PostDetails = ({ post }) => {
  return (
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

//url deki props yakalamak için bi fonk daha yazıcaz 
// her istekte tekrar tekrar yeniden html sayfası oluşturuluyor
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
// örnek veriyorum 100 tane post çekicez o zaman hızlı olmasını istiyorsak öncedne pre-renderinng yapmak istiyorsak bu kombinasyonu kullanabiliriz 
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    const posts = await res.json();

    const paths = posts.map((post) => {
        return {
            params: { id: post.id.toString()    }, // idleri string olarak istediğini söylüyor 
        } // burda gönderdiğimiz parametrelere göre önceden oluşturuyor 
    }) 

 /*  
 paths bi array olmak durumunda ve bir obje döndürücem return ile   
 return {
        paths: [
            {params: {...}}
        ],
        fallback:true; // or false;
    }
 */

    return { // path alacagı değer bir dizi olmalı
        paths, // buranın nihayetinde kaç tane html sayfası oluşturmam gerektiğini biliyorum şimdi post'ların gerçek verilerini nasıl alabilirim
        fallback: false, // fallback false yaparsam örn localhost:3000/posts/123123 abuk subuk sayı girersek 404 sayfasını gönderir true yaparsak server hatası alırız 
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const post = await res.json();

    return {
        props: {
            post,
        },
    }
}


export default PostDetails  