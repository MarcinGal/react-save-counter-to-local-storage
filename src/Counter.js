import React from 'react'


class Counter extends React.Component {
    state = {
        number: parseInt(localStorage.getItem('actual number:')) || this.props.startValue
    }

    incHandler = () => {
        if (this.state.number >= this.props.max) return
        this.setState({ number: this.state.number + 1 })
        localStorage.setItem('actual number:', `${this.state.number + 1}` )
    }

    incFiveHandler = () => {
        if (this.state.number >= this.props.max) return
        this.setState({ number: this.state.number + 5 })
        localStorage.setItem('actual number:', `${this.state.number + 5}`)
    }

    decHandler = () => {
        if (this.state.number <= this.props.min) return
        this.setState({ number: this.state.number - 1 })
        localStorage.setItem('actual number:', `${this.state.number - 1}`)

    }

    decFiveHandler = () => {
        if (this.state.number <= this.props.min) return
        this.setState({ number: this.state.number - 5 })
        localStorage.setItem('actual number:', `${this.state.number - 5}`)

    }

    resetHandler = () => {
        return (
            this.setState({ number: this.props.startValue }),
            localStorage.setItem('actual number:', `${this.props.startValue}`)
        )
    }

    render() {

        return (
            <div>
                <h2>{this.state.number}</h2>
                <button
                    onClick={this.incHandler}>+ 1
                </button>
                <button
                    onClick={this.decHandler}>- 1
                </button>
                <button
                    onClick={this.resetHandler}>RESET
                </button>
                <button
                    onClick={this.incFiveHandler}> + 5</button>
                <button
                    onClick={this.decFiveHandler}> - 5</button>
                <div>
                    {
                        localStorage.getItem('actual number:') <= this.props.min ?
                            'Lower range exceeded!'
                            :
                            localStorage.getItem('actual number:') >= this.props.max ?
                                'Upper range exceeded!'
                                :
                                null
                    }
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {
    startValue: 0,
    min: -100,
    max: 100,
}

export default Counter