function Quotation(){
    return(
        <div>
            <div className="quotation_component">
                <div className="container">
                    <div className="row'">
                        <div className="col-md-12'">
                            <h1>it's time to statrt your adventure</h1>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .quotation_component{
                        background: #475635;
                        padding: 100px 0px;
                        color: #fff;
                    }
                    .quotation_component h1{
                        text-transform: uppercase;
                        text-align: center;
                        font-size: 30px;
                    }
                `}
            </style>
        </div>
    )
}
export default Quotation