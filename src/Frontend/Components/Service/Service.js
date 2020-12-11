import React,{Component} from 'react'
import './Service.css'

class Service extends Component{
    render(){
        return(
            <section className="service-section">
                <div className="container">
                <div className="card">
                    <div className="content">
                        <h3>Normal Training</h3>
                        <h4>650 Rs</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas doloribus aliquam fugiat. Labore adipisci placeat vero nam consectetur quibusdam.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h3>Normal Training+Cardio</h3>
                        <h4>1000 Rs</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas doloribus aliquam fugiat. Labore adipisci placeat vero nam consectetur quibusdam.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h3>Special Training</h3>
                        <h4>5000 Rs</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas doloribus aliquam fugiat. Labore adipisci placeat vero nam consectetur quibusdam.
                        </p>
                    </div>
                </div>
                </div>

            </section>
        )
    }
}
export default Service;