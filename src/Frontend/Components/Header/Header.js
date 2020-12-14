import React,{Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
class Header extends Component{

    state={
        value:false
    }
    onHide=()=>{
        this.setState({value:!this.state.value})


        
    }
  
    render(){
      
        return(
            
            <header>
              
                <div className="container">
                    <div className="logo">
                        <a href="">Logo</a>

                    </div>
                    <div className="heading">
                        
                        <span>s</span><h1>Span</h1>
                        <h4>FITNESS CARE</h4>
                    </div>
                    <nav>
                        <div className="ham"><i className="fas fa-bars" onClick={this.onHide}></i></div>
                       <div className= {`${this.state.value ? 'show' : 'hide'}`}>
                       <div className="home"> <Link to="/" onClick={this.onHide}>Home</Link></div>
                       <div className="services"><Link to="/service" onClick={this.onHide}>Our Services</Link>
</div>
                       </div>
                       
                        
                    </nav>
                    <div className="res">

                </div>
                </div>
               
            </header>
        )
    }
}
export default Header;