class App extends React.Component {
    state = {
        name: '',
        comment: '',
        inputs: []
    }

    handlename = event => {
        this.setState({
            name: event.target.value
        })
    }

    handlecomment = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        //inputs.push(name);
        console.log(this.state);
    }

    onChange = (event) => {
        this.setState({ name: event.target.value });
        this.setState({ comment: event.target.value });
}

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name:``,
            comment:``,
            inputs: [...this.state.inputs, this.state.name, this.state.comment]
        });
}

    render() {
            return (
                <div className="app">
                   <form onSubmit={this.handleSubmit}>
                        <label>
                            Nom :
                            <input type="text" name="name" id="" 
                            placeholder="Entrez votre nom" 
                            value={this.state.name} 
                            onChange={this.handlename} />
                        </label>
                        <label>
                            Commentaire :
                            <input type="text" name="comment" id="" 
                            placeholder="Entrez votre commentaire" 
                            value={this.state.comment} 
                            onChange={this.handlecomment}/>
                        </label>
                        <input type="submit" value="Envoyer"/>
                    </form>
                </div>
            );
        }
}

ReactDOM.render(<App/>,document.getElementById("app"));