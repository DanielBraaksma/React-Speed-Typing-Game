import React from "react"

function App() {
    const [text, setText] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(5)
    const [isTimeRunning, setIsTimeRunning] = React.useState(false)

    function handleChange(e) {
        const {value} = e.target //destructure from the event object
        setText(value)  //set state with the new value of input area
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    React.useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            setIsTimeRunning(false)
        }
    }, [timeRemaining, isTimeRunning])

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={() => setIsTimeRunning(true)}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
