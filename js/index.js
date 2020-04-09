class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header jumbotron text-center">
                <h2>Guessing random number</h2>
                <p>Tôi đã chọn một số random trong khoảng
                1 - 100, đố bạn đoán được!
                </p>
            </div>
        )
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGuessing: 0,
            inputValue: 0,
            randomNumer: this.randomNumer(),
            message: ''
        }
    }

    // new game
    newGame = () => {
        this.setState({
            numberOfGuessing: 0,
            inputValue: 0,
            randomNumer: this.randomNumer(),
            message: ''
        })
    }

    // get randome number between 1 and 100
    randomNumer = () => {
        return Math.floor((Math.random() * 100) + 1)
    }

    // event of input value change
    onValueChange = (event) => {
        var value = parseInt(event.target.value)
        console.log("value", value)
        if (typeof(value) != 'number' || !value) {
            value = 0;
        } 
        this.setState({
            ...this.state, inputValue: value
        })
    }

    guessing = () => {
        const { inputValue, randomNumer, numberOfGuessing } = this.state;
        if (inputValue < randomNumer) {
            this.setState({ ...this.state, numberOfGuessing: numberOfGuessing + 1, message: "Số bạn đoán quá nhỏ!" })
        } else if (inputValue > randomNumer) {
            this.setState({ ...this.state, numberOfGuessing: numberOfGuessing + 1, message: "Số bạn đoán quá to!" })
        } else {
            alert("You win with score: " + (this.state.numberOfGuessing + 1))
        }
    }

    render() {
        return (
            <div className="body">
                <button onClick={this.newGame}>Game mới</button>
                <hr />
                <p className="text-bold">Số lần bạn đã đoán là: {this.state.numberOfGuessing}</p>
                <p className="text-bold">Số bạn đoán là: </p>
                <input type="number" max="100" value={this.state.inputValue} onChange={this.onValueChange} />
                <button className="btn-green" onClick={this.guessing} >Đoán</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))