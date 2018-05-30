import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            inputs: {
                fname: '',
                lname: '',
                email: '',
                phone: '',
                food: '',
                yourself: ''
            },
            data: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState(prevState => {
            return {
                data: [...prevState.data, this.state.inputs]
            }
        })
    }


    render() {
        const myBadges = this.state.data.map(badge => {
            return <div>
                <ul className='badgeContainer'>
                    <li>{badge.fname} {badge.lname}</li>
                    <li>{badge.email}</li>
                    <li>{badge.phone}</li>
                    <p>{badge.yourself}</p>
                </ul>
            </div>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='formContainer'>
                <input  placeholder='First Name' type='text' name='fname' value={this.state.inputs.fname} onChange={this.handleChange}/>
                <input placeholder='Last Name' type='text' name='lname' value={this.state.inputs.lname} onChange={this.handleChange}/>
                <input placeholder='Email' type='text' name='email' value={this.state.inputs.email} onChange={this.handleChange}/>
                <input placeholder='Birth Place' type='text' name='birth' value={this.state.inputs.birth} onChange={this.handleChange}/>
                <input placeholder='Phone Number' type='text' name='phone' value={this.state.inputs.phone} onChange={this.handleChange}/>
                <input placeholder='Favorite Food' type='text' name='food' value={this.state.inputs.food} onChange={this.handleChange}/>
                <input placeholder='Tell us about yourself' type='text' name='yourself' value={this.state.inputs.yourself} onChange={this.handleChange}/>
                <button>Submit</button>
                </form>
                {myBadges}
            </div>
        );
    }
}

export default Form;
