function Numbers(){
    return(
        <div>
            <div className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <i className="fa fa-map"></i>
                            <h1>300</h1>
                            <h2>Packages</h2>
                        </div>
                        <div className="col-md-3">
                            <i className="fa fa-map-marker"></i>
                            <h1>350</h1>
                            <h2>Destinations</h2>
                        </div>
                        <div className="col-md-3">
                            <i className="fa fa-send"></i>
                            <h1>20</h1>
                            <h2>Parks</h2>
                        </div>
                        <div className="col-md-3">
                            <i className="fa fa-group"></i>
                            <h1>500+</h1>
                            <h2>Happy Clients</h2>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="create_tour">Create your toure</h1>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                
                .numbers{
                    background-image:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../static/images/adv7.jpg");
                    background-attachment: fixed;
                    background-position: center;
                    background-size: cover;
                    color: #fff;
                    text-align:center;
                    padding-top: 250px;
                    padding-bottom: 200px;
                }
                .numbers i{
                    font-size:50px;
                    border: 1px solid #fff;
                    width: 100px;
                    height: 100px;
                    border-radius: 100%;
                    margin-bottom: 20px;
                    padding-top: 25px;
                }
                .numbers h1{
                    font-size: 50px;
                    font-family: comic;
                }
                .numbers h2{
                    font-size: 30px;
                    font-family: monospace;
                }
                .numbers h1.create_tour{
                    font-size: 70px;
                    font-family: comic;
                    text-transform: capitalize;
                }
                
                
                
                `}
            </style>
        </div>
    )
}
export default Numbers