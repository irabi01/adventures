import Link from 'next/link'

function AboutComponent(){
    return(
        <div>
            <div className="about_component">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h1>About Adventure</h1>
                            <div className="aboutLine"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <Link href="/about">
                                <a className="goaboutpage">read more</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                
                    .about_component{
                        background: #fff;
                        color: #000;
                        text-align: center;
                        padding: 100px 0px;
                    }
                    .aboutLine{
                        width: 50%;
                        height: 2px;
                        margin:10px auto;
                        background: #f58209;
                    }
                    .about_component h1{
                        text-transform: uppercase;
                        text-align: center;
                    }
                    .goaboutpage{
                        background: #f58209;
                        border: none;
                        padding: 20px 40px;
                        text-transform: capitalize;
                        color: #fff;
                        border-radius: 0px;
                    }
                
                `}
            </style>
        </div>
    )
}
export default AboutComponent