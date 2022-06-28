import {Component} from 'react';
//import jsonTickets from './TicketInfo.json';

class Tickets extends Component{
	state ={
		activeTickets:[{"name":"" , "lastName":"" , "ID":"" , "route":"", "key":"0"}]
	};completed = []

	AddTickets = function AddTickets() {return(<div>
	<form id='form' onSubmit = {this.onSubmit} className = 'AddTickets'>
		Name:<input id ="name" name ='name' onChange = {this.onChange }   className ='element' />
		Last Name:<input id ="lastName" name ='lastName' onChange = {this.onChange }  className ='element'/>
		ID:<input id ="ID" name = 'ID' onChange = {this.onChange }  className ='element'/>
		<select name = 'route' onChange = {this.onChange }  className ='element'>
			<option ></option>
			<option >Cumana->PDP</option>
			<option >PDP->Cumana</option>
		</select>
		<button type = 'submit' text = 'submit' className ='AddTicketButton'>submit</button>
		<button onClick={this.clear} type = 'submit' text = 'submit' className ='AddTicketButton'>Clear</button>
	</form></div>)}

	keyGen = function keyGen(){
		const newKey = this.state.activeTickets[this.state.activeTickets.length - 1] + 1
		this.setState({
			activeTickets: [...this.state.activeTickets,
			newKey]
		})
		console.log(this.state.activeTickets)
	}
	onSubmit = e => { e.preventDefault();
		const newTicket = {"name":this.state.name, "lastName":this.state.lastName, "ID":this.state.ID,"route":this.state.route}
		this.completed.push(newTicket)}
		//this.setState({"name":"","lastName":"" , "ID":"" , "route":""

	onChange = e =>{ this.setState({ [e.target.name] : e.target.value })}

	deleteTickets = e => {this.setState({	 activeTickets:[{"name":"" , "lastName":"" , "ID":"" , "route":"", "key":"0"}]	})	}

	clear = e => { e.preventDefault();
		document.getElementById("name").value = "";
		document.getElementById("lastName").value = ""
		document.getElementById("ID").value = ""}



	render(){
		return(
			<div className = 'Tickets'>
				<ul>
				{this.state.activeTickets.map(e => 
					<li style = {{"list-style":"none"}}>{this.AddTickets()} </li>
				)}
				</ul>
				<div><button className='MainButton' onClick = { () => this.keyGen()}>Add Ticket</button>
					 <button className='MainButton' onClick = {	() => {this.deleteTickets()}	}>Delete Tickets</button>
				</div>
			</div>
		)
	}
}
export default Tickets;