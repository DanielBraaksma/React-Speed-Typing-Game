import React from "react"

function App() {
    const [text, setText] = useState("")

    function handleChange(e) {
        const {value} = e.target //destructure from the event object
        setText(value)  //set state with the new value of input area
    }

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange} // update the textarea on every keystroke
                value={text}
            />
            <h4>Time remaining: ???</h4>
            <button>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
