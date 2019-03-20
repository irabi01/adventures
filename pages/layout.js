import Heading from './heading'
import Footer from './footer';

function Layout(props){
    return (
        <div>
          <Heading/>
          {props.children}
          <Footer/>
          <script src="http://code.jquery.com/jquery-3.3.1.js"></script>
          <script src="../static/bootstrap/bootstrap.min.js"></script>
          
        </div>
      )
}
export default Layout