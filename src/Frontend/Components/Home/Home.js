import React,{Component} from 'react'
import './Home.css'


class Home extends Component{
    render(){
        return(
            <section className="section-one">
                <div className="container">
                    <div className="left">
               <p>Welcome to span gym family!</p>
                    </div>
                    <div className="right">
                        <form>
                            <h1>Sign In</h1>
                            <div className="input-group">
                                <input type="text" required/>
                               < br/>
                                <label htmlFor="">Username</label>
                            </div>
                            <div className="input-group">
                      

                                <input type="password" required />
                                < br/>
                                <label htmlFor="">Password</label>
                                <div className="button">
                                    <button>Sign Up</button>
                                </div>
                                <br/>
                                <div className="signin">
                                    <h5>already have an account?
                                        <a href="">signin</a>
                                    </h5>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;