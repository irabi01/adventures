import Link from 'next/link'

function Navigation(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light fixed-top">
                <a class="navbar-brand" href="#">Adventure Logo</a>
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
                            background: #fff !important;
                        }
                        .navbar-brand{
                            color:#000;
                            font-size: 18px;
                            font-weight: bold;
                        }
                        div ul li:hover{
                            background: #475635;
                        }
                        div ul li:hover a{
                            color: #fff;
                        }
                        div ul li a{
                            text-align: center;
                            color:#000;
                            font-weight: bold;
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
  
                    
                    `}
                </style>
        </div>
    )
}
export default Navigation