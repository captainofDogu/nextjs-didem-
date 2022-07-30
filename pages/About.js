import Head from "next/head"

export default function About() {

    return (
        <>
        <Head>
            <title>About page lan</title>
            <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <h1 className="bigText greenColor">About sayfası</h1>

        <style jsx> 
            {`
            .greenColor{
                color:green;
            }
            .redColor {
                color: red;
            }
            .bigText {
                font-size: 26px;
            }
            `}
        </style>
        </>
    )
}
{/* style jsx ile css böyle de ekliyebilirz  */}
/* public altında herhangi bi resme ulaşmak istiyorsak başıan / koyuyoruz s */