import {Component} from 'react';
import './styles.css'
import whinnie from './whinnie pooh whatsapp.jpg'
import Tickets from './Tickets.js'
import Dashboard from './Dashboard.js'
import Confirmation from  './Confirmation'

class App extends Component{
	state = {
		active:'Confirmation'
	};NavBar = function NavBar() {return(	<div className = 'NavBar' >
				<div className = 'NavLogo'> <img alt = 'logo' src = {whinnie}></img></div>
				<div className = 'NavButtons' onClick = {() => this.setState({active:"Dashboard"})}>Dashboard</div>
				<div className = 'NavButtons' onClick = {() => this.setState({active:"Tickets"})}>Tickets</div>
				<div className = 'NavButtons' onClick = {() => this.setState({active:"Confirmation"})}>Confirmation</div>
				<div className = 'NavButtons' onClick = {() => this.setState({active:"Changes"})}>Changes</div>
			</div>)}
	render(){
		if(this.state.active === 'Tickets'){
			return(<>
				{this.NavBar()}
				<Tickets />
			</>)
		}else if(this.state.active === 'Dashboard'){
			return (<>
				{this.NavBar()}
				<Dashboard/>
			</>)	
		}else if(this.state.active === 'Confirmation'){
			return (<>
				{this.NavBar()}
				<Confirmation/>
			</>)
		}else if(this.state.active === 'Changes'){
			return (<>
				{this.NavBar()}
				<div >Changes</div>
			</>)
		}

	}//close tag of render!
}//App class close tag

export default App;
