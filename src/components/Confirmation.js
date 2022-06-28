import {Component} from 'react';

const elements = {"textAlign":"center","justifyContent":"center","margin":"1em"}
const button = {"heihgt":"2em"}
const input = {"height":"2em"}

class Confirmation extends Component{
	onSubmit = e => { e.preventDefault();
		document.getElementById("confirmInput").value = ""}
	render(){
		return(<div className='Confirmation'>

			<form  onSubmit = {this.onSubmit} >
				
				<div style={elements}><b>Insert the ID of Ticket Here</b></div>	
				<div style={elements}><input id="confirmInput" style= {input} /></div>
				<div style={elements} ><button style = {button}>Confirm!</button></div>
			
			</form>

		</div>)
	}
}
export default Confirmation;