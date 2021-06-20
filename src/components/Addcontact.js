import React from 'react';
class Addcontact extends React.Component {
    state = {
        name: "",
        email: "",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("all the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        this.props.history.push("/");

    };
    render() {
        return (
            <div className="ui main">

                <h2> ADD Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name"
                            value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>EMAIL</label>
                        <input type="email" name="name" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue">ADD</button>
                </form>
            </div>
        );
    }
}
export default Addcontact;