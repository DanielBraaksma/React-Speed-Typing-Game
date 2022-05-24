import React from "react"

function App() {
    const [text, setText] = React.useState("")

    function handleChange(e) {
        const {value} = e.target //destructure from the event object
        setText(value)  //set state with the new value of input area
    }

    function calculateWordCount(text) { 
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange} // update the textarea on every keystroke
                value={text}
            />
            <h4>Time remaining: ???</h4>
            <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
