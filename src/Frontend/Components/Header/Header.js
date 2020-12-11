import React,{Component} from 'react'
import './Header.css'

class Header extends Component{
  
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
                        <div className="ham"><i class="fas fa-bars"></i></div>
                        <a href="">Home</a>
                        <a href="">Services</a>
                        <a href="">Our Branches</a>
                        
                    </nav>
                    <div className="res">
                <nav>
                        <a href="">Home</a>
                        <a href="">Services</a>
                        <a href="">Our Branches</a>
                        
                    </nav>

                </div>
                </div>
               
            </header>
        )
    }
}

export default Header;