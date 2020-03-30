import React from 'react'
import ReactDOM from 'react-dom'

const App = function() {
    const buttonText = { text: 'Click me!' };
    const labelText = 'Enter name: ';
    
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input type="text" name="text" id="text"/>
            <button style={{ backgroundColor: 'red', color: 'white'}}>{buttonText.text}</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)