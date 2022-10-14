import React from 'react';

// Class Components
class AddContact extends React.Component {
    render() {
        // using state => React property
        this.state = {
            name: "",
            email: ""
        };

        const add = (e)=> {
            e.preventDefault();

            if(this.state.name === "" && this.state.email === ""){
                alert("All the fields are mandatory");
                return;
            }

            this.props.addContactHandler(this.state);
            console.log(this.state);

        };

        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder="Name"
                            value={this.state.email}  
                            onChange={ (e) => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className='field'>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}  
                            onChange={ (e) => this.setState({name: e.target.value})}
                        />
                    </div>
                    
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;