import React from 'react'


class Counter extends React.Component {
    state = {
        number: this.props.startValue
    }

    initialLocalStorage = () => localStorage.setItem('actual number:', `${this.props.startValue}`)

    incHandler = () => {
        if (this.state.number >= this.props.max) return
        this.setState({ number: this.state.number + 1 })
        localStorage.setItem('actual number:', `${this.state.number + 1}`)
        
    }

    decHandler = () => {
        if (this.state.number <= this.props.min) return
        this.setState({ number: this.state.number - 1 })
        localStorage.setItem('actual number:', `${this.state.number - 1}`)
        
    }

    resetHandler = () => {
       return ( 
           this.setState({ number: this.props.startValue}),
           localStorage.setItem('actual number:', `${this.props.startValue}`)
       )
        }

    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                <button
                    onClick={this.incHandler}>+
                </button>
                <button
                    onClick={this.decHandler}>-
                </button>
                <button
                    onClick={this.resetHandler}>RESET
                </button>
                <div>
                    {
                        this.state.number === this.props.min ?
                        'Lower range exceeded!'
                        :
                        this.state.number === this.props.max ?
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