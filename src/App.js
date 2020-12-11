import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import Header from './Frontend/Components/Header/Header'
import Home from './Frontend/Components/Home/Home'
import Service from './Frontend/Components/Service/Service'
class App extends Component{
render(){
  return(
    <div className="app">
   <Header/>
   <Home/>
   <Service/>
   </div>
  )
}

}
export default App;