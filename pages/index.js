import Layout from './layout'
import Link from 'next/link'
import Quotation from '../components/quotation';
import Condition from '../components/condition';
import AboutComponent from '../components/about';
function Home() {
    
    return(
        <Layout>
            <div>
                <div className="home_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>fun and adventure with joyful trip</h1>
                                <h2>Never let your memory be greater than your dream</h2>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row second_row">
                            <div className="col-md-4 offset-md-4">
                                <Link href="/destination">
                                    <a className="ourdestination mr-4">Our destination</a>
                                </Link>
                                <Link href="/parks">
                                    <a className="ourparks">Our parks</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Quotation/>
                <AboutComponent/>
                <Condition/>
                <style jsx>
                    {`
                    
                    .home_top{
                        background-image:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../static/images/adv3.jpg");
                        background-attachment: fixed;
                        background-position: center;
                        background-size: cover;
                        color: #fff;
                        text-align:center;
                        padding-top: 250px;
                        padding-bottom: 200px;
                    }
                    .home_top h1{
                        font-size:60px;
                        text-transform: capitalize;
                    }
                    .home_top h2{
                        font-size:20px;
                        text-transform: capitalize;
                    }
                    .ourdestination{
                        background: #3399ff;
                        color: #fff;
                        padding: 20px 30px;
                        margin-top: 10px;
                        text-transform: capitalize;
                        text-decoration: none;
                        border: none;
                        border-radius: 0px;
                    }
                    .ourparks{
                        background: transparent;
                        color: #fff;
                        padding: 20px 30px;
                        margin-top: 10px;
                        text-transform: capitalize;
                        border: 1px solid #fff;
                        text-decoration: none;
                        border-radius: 0px;
                    }
                    
                    `}
                </style>
            </div>
        </Layout>
    ) 
  }
  
  export default Home