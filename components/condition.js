function Condition(){
    return(
        <div>
            <div className="servcie_component">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Professional Team</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="col-md-4">
                            <h1>Expert hikers</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="col-md-4">
                            <h1>In every condition</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .servcie_component{
                        background:#fff;
                        color: #000;
                        padding: 200px 0px;
                    }
                    .servcie_component h1{
                        font-size: 20px;
                        text-align: center;
                        text-transform: capitalize;
                    }
                    .servcie_component p{
                        text-align: center;
                        font-size: 14px;
                    }
                
                `}
            </style>
        </div>
    )
}
export default Condition