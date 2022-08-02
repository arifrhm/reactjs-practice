import React from "react";
import * as Validator from 'validatorjs';

const Input = ({label, type, name, onChange}) => {
    return(
        <div>
            <label> {label}: </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>

    )
}

const ShowErrors = ({errors}) =>{
    return(
        <ul style= {{color:'red', marginleft: '-50px'}}>
            {
            errors.map((errors, i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component{

    state ={
        email:'',
        password:'',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = (this.state);

        //======= Without Library Validatorjs ========= 
        //let message = [];
        
        // if (email.length === 0){
        //     message = [...message, 'Email tidak boleh kosong, blok!'];
        // }

        // if (password.length === 0){
        //     message = [...message, 'Password tidak boleh kosong, blok!'];
        // }

        // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if(!re.test(String(email).toLowerCase())){
        //     message = [...message, 'Email Anda Salah, blok!'];
        // }

        // if (password.length < 8){
        //     message = [...message, 'Password Anda Salah, blok!'];
        // }

        // if (message.length > 0){
        //     this.setState({
        //         errors: message
        //     });
        // }else{
        //     alert(`
        //     Email: ${this.state.email}
        //     Password: ${this.state.password}
        //     `);
        //     this.setState({
        //         errors: []
        //     })
        // }


        //======= With Library Validatorjs ========= 
        let data = { email, password };
          
        let rules = {
            email: 'required|email',
            password: 'min:8|required'
        };

        let validation = new Validator (data, rules);
        validation.passes();
        
        if(validation != null){
            alert(`
            Success login to Your account!

            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
            // console.log(this.setState);
        }else{
            this.setState({
                errors: [
                    ...validation.errors.get('email'),
                    ...validation.errors.get('password')
                ]
            })
        }

        
    }
    render(){
        const styled = {
            width: '400px',
            margin: '100px auto 0',
            border: '2px solid darkgreen',
            padding: '20px'
        }

        return(
            <div style={styled}>
                <h3>Login Your Account Here!</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="Email" 
                    onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" label="Password" 
                    onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">Sign In</button>
                    {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                    }
                </form>
            </div>
        )
    }
}