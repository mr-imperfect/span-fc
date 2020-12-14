import React,{Component} from 'react'
import './Home.css'

// import Axios from 'axios';      

class Home extends Component{
   
    // componentDidMount(){
    //     // let user=req.body.username
    //     Axios.post("http://localhost:3001/submit").then( resp =>{    
    //          console.log(resp);
        
        
    //  })
    // }
   
    render(){
        return(
            <section className="section-one">
                <div className="container">
                    <div className="left">
               <p>Welcome to span gym family!</p>
                    </div>
                    <div className="right">
                        <form action="submit" method="POST">
                            <h1>Sign In</h1>
                            <div className="input-group">
                                <input type="text" name="username" required/>
                               < br/>
                                <label htmlFor="">Username</label>
                            </div>
                            <div className="input-group">
                                <input type="password" name="password" required/>
                                < br/>
                                <label htmlFor="">Password</label>
                                </div>
                                <div className="button">
                                    <button>Sign Up</button>
                                </div>
                                <br/>
                                <div className="signin">
                                    <h5>already have an account?
                                        <a href="#">signin</a>
                                    </h5>
                                </div>


                            
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;