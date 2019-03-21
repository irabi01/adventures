import Link from 'next/link'

function Navigation(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light fixed-top">
                <a class="navbar-brand" href="/">Adventure Logo</a>
                <button class="navbar-toggler cpBtn" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link href="/">
                           <a class="nav-link">Home</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/about">
                           <a class="nav-link">About</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/destination">
                           <a class="nav-link">Destination</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/hiking">
                           <a class="nav-link">Hiking</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/parks">
                           <a class="nav-link">Parks</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/contact">
                           <a class="nav-link">Contact</a>
                        </Link>
                    </li>
                    </ul>
                </div>
                </nav>
                <style>
                    {`
                        .bg-light{
                            background: #f58209 !important;
                        }
                        .navbar-brand{
                            color:#000;
                            font-size: 18px;
                            font-weight: bold;
                        }
                        div ul li{
                            border-right: 1px solid #fff;
                        }
                        div ul li:hover{
                            background: #475635;
                        }
                        div ul li:hover a{
                            color: #fff;
                        }
                        div ul li a{
                            text-align: center;
                            color:#fff;
                            font-weight: bold;
                            font-size:15px;
                            font-family:monospace;
                            letter-spacing:2px;
                        }
                        .cpBtn{
                            padding: 2px 5px;
                            border: none;
                            outline: none;
                        }
                        .cpBtn > div{
                            width: 30px;
                            height: 5px;
                            background: #475635;
                            margin: 3px 0px;
                            border-radius: 4px;
                            
                        }
                        /* Extra small devices (phones, 600px and down) */
                        @media only screen and (max-width: 600px) {
                            div ul li{
                                border-right: none;
                            }
                        } 

                        /* Small devices (portrait tablets and large phones, 600px and up) */
                        @media only screen and (min-width: 600px) {
                            div ul li{
                                border-right: none;
                            }
                        } 

                        /* Medium devices (landscape tablets, 768px and up) */
                        @media only screen and (min-width: 768px) {
                            div ul li{
                                border-right: 1px solid #fff;
                            }
                        } 

                        /* Large devices (laptops/desktops, 992px and up) */
                        @media only screen and (min-width: 992px) {...} 

                        /* Extra large devices (large laptops and desktops, 1200px and up) */
                        @media only screen and (min-width: 1200px) {...}
  
                    
                    `}
                </style>
        </div>
    )
}
export default Navigation