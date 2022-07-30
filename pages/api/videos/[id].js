import {videos} from "../../../videos";  // en dış dizinde bi dosya oluşturduk videos.js
export default (req, res) => {
    const { id } = req.query;
    console.log("req.query",req.query)
    /* 
    req.query { id: '1' }
    */
// videos dosyasından gelen değer bi string olmadıgı için string'e çeviriyoruz 
    const video = videos.find((video => video.id.toString() === id))
// eğer video varsa json olarak döndür 
    if(video){
        res.status(200).json(video)

    }else{ // eğer video yoksa 404 hatası versin message olarak da yazıdıgımız messajı yazsın ekranda 
        res.status(404).json({
            message:"Error No Such Message "
        })
    }
}

// dinamik api oluşturmak istiyorsak id almamız lazım