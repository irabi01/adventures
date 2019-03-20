
function Footer(){
    return(
            <div>
                <div className="footer_page">
                    <p><i className="fa fa-copyright"></i> {(new Date().getFullYear())} All rights reserved. Advernture</p>
                </div>
                <style jsx>
                    {`
                        .footer_page{
                            background-color: #231f20;
                            padding: 100px 0px;
                        }
                        
                        .footer_page p{
                            font-size: 18px;
                            color: #fff;
                            text-align: center;
                            text-transform: initial
                        }
                    `}
                </style>
            </div>

    )
}

export default Footer