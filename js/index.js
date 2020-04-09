class App extends React.Component {
    render() {
        return (
            <div>
                <div class="header jumbotron text-center">
                    <h2>Guessing random number</h2>
                    <p>Tôi đã chọn một số random trong khoảng
                    1 - 100, đố bạn đoán được!
                    </p>
                </div>
                <div class="body">
                    <button>Game mới</button>
                    <hr />
                    <p class="text-bold">Số lần bạn đã đoán là: 0</p>
                    <p class="text-bold">Số bạn đoán là: </p>
                    <input type="number" />
                    <button class="btn-green">Đoán</button>
                    <p>message</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))