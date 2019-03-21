import Link from 'next/link'

function TwoSides(){
    return(
        <div>
            
            <div className="twosides">
                <div className="row">
                    <div className="col-md-8">
                        <div className="left_side">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right_side">
                            <h1>Wild nature</h1>
                            <h2>Safe adventure</h2>
                            <br/><br/>
                            <Link href="/parks">
                                <a className="parks">explore parks</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .twosides .row{
                        margin: 0px;
                        background: #f58209
                    }
                    .left_side{
                        background-image:linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("../static/images/bird.jpg");
                        background-position: center;
                        background-attachment: fixed;
                        background-size: cover;
                        color: #fff;
                        text-align:center;
                        padding-top: 250px;
                        padding-bottom: 200px;
                    }
                    .left_side p{
                        padding:0px 20px;
                    }
                   .right_side{
                       padding-top: 200px;
                       padding-bottom: 100px;
                       text-align: center;
                   } 
                   .right_side h1{
                       text-align: center;
                       font-size: 50px;
                       color:#000;
                       text-transform: uppercase;
                   }
                   .right_side h2{
                    text-align: center;
                    font-size: 30px;
                    color:#000;
                    text-transform: capitalize;
                   }
                   .right_side a{
                       background: transparent;
                       border: 1px solid #475635;
                       color:#fff;
                       text-transform: capitalize;
                       padding: 10px 30px;
                       border-radius:20px;
                       text-decoration: none;
                   }
                
                
                `}
            </style>
            
        </div>
    )
}
export default TwoSides



