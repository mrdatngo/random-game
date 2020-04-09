class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfGuessing: 0
        }
    }

    updatgeNumberOfGuessing = (newValue) => {
        this.setState({
            numberOfGuessing: newValue
        })
    }

    render() {
        return (
            <div>
                <Header numberOfGuessing={this.state.numberOfGuessing} />
                <Body updatgeNumberOfGuessing={this.updatgeNumberOfGuessing} numberOfGuessing={this.state.numberOfGuessing} />
            </div>
        )
    }
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div className="header jumbotron text-center">
//                 <h2>Guessing random number</h2>
//                 <p>Tôi đã chọn một số random trong khoảng
//                 1 - 100, đố bạn đoán được!
//                 </p>
//                 {
//                     this.props.numberOfGuessing >= 7 && (
//                         <p className="red-color">
//                             Số lần bạn đoán đã khá cao :
//                             { this.props.numberOfGuessing}.
//                             Hãy cẩn thận không là thua!
//                         </p>
//                     )
//                 }
//             </div>
//         )
//     }
// }

const Header = ({ numberOfGuessing }) => {
    return (
        <div className="header jumbotron text-center">
            <h2>Guessing random number</h2>
            <p>Tôi đã chọn một số random trong khoảng
            1 - 100, đố bạn đoán được!
                </p>
            <Warnning numberOfGuessing={numberOfGuessing} />
        </div>
    )
}

const Warnning = ({ numberOfGuessing }) => {
    return (
        <div>
            {
                numberOfGuessing >= 7 && (
                    <p className="red-color">
                        Số lần bạn đoán đã khá cao :
                        { numberOfGuessing }.
                        Hãy cẩn thận không là thua!
                    </p>
                )
            }
        </div>
    )
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
            maximumGuessing: 10,
            randomNumer: this.randomNumer(),
            message: ''
        }
    }

    // new game
    newGame = () => {
        this.setState({
            inputValue: 0,
            maximumGuessing: 10,
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
        if (typeof (value) != 'number' || !value) {
            value = 0;
        }
        this.setState({
            ...this.state, inputValue: value
        })
    }

    guessing = () => {
        const { inputValue, randomNumer } = this.state;
        const newNumberOfGuessing = this.props.numberOfGuessing + 1
        this.props.updatgeNumberOfGuessing(newNumberOfGuessing)

        if (inputValue < randomNumer) {
            this.setState({ ...this.state, message: "Số bạn đoán quá nhỏ!" })
        } else if (inputValue > randomNumer) {
            this.setState({ ...this.state, message: "Số bạn đoán quá to!" })
        } else {
            alert("You win with score: " + newNumberOfGuessing)
            this.newGame()
        }
        if (newNumberOfGuessing >= this.state.maximumGuessing) {
            alert("You lose!")
            this.newGame()
        }
    }

    render() {
        return (
            <div className="body">
                <button onClick={this.newGame}>Game mới</button>
                <hr />
                <p className="text-bold">Số lần bạn đã đoán là: {this.props.numberOfGuessing}</p>
                <p className="text-bold">Số bạn đoán là: </p>
                <input type="number" max="100" value={this.state.inputValue} onChange={this.onValueChange} />
                <button className="btn-green" onClick={this.guessing} >Đoán</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))