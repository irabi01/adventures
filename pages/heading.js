import Head from 'next/head'
import Navigation from './navigation'
function Heading(){
    return(
        <div>
        <Head>
            <title>Adverture</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="stylesheet" href="../static/bootstrap/bootstrap.min.css"/>
            <link rel="stylesheet" href="../static/bootstrap/bootstrap.css"/>
            <link rel="stylesheet" href="../static/bootstrap/css.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <Navigation/>
        </div>
    )

}
export default Heading
    