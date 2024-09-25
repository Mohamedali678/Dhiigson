"use client"
import { useState } from "react"
import Result from "../../components/Result"
import questions from "../../components/questions"

function Test(){

    const [index, setIndex] = useState(0)
    const [color, setColor] = useState(0)

    // Initialize result states
    const [result1, setResult1] = useState(0)
    const [result2, setResult2] = useState(0)
    const [result3, setResult3] = useState(0)

    const [showResult1, setShowResult1] = useState(false)
    const [showResult2, setShowResult2] = useState(false)
    const [showResult3, setShowResult3] = useState(false)


    // Handle answer selection
    const handleAnswer = (e) => {
        if (e === "Yes") {
            setResult1(prev => prev + 1)
            setColor(1)
        } else if (e === "No") {
            setResult2(prev => prev + 1)
            setColor(2)
        } else if (e === "Not sure") {
            setResult3(prev => prev + 1)
            setColor(3)
        }
    }

    // Handle next question and showing results
    const handleNextQuestion = () => {
        if (index === questions.length - 1) {
            showAllResult()
        } else if (index < questions.length - 1) {
            setIndex(index + 1)
            setColor(0) // Reset selection highlight for each new question
        }
    }

    // Show the appropriate result based on the score
    const showAllResult = () => {
        if (result1 >= 7) {
            setShowResult1(true)
        } else if (result2 >= 4) {
            setShowResult2(true)
        } else {
            setShowResult3(true)
        }
    }

    return (
        <div className="h-screen bg-gradient-to-t from-red-300 to-blue-300">
            {
                showResult1 ? (
                    <Result 
                    resultText="Your answers indicate a higher risk of having diabetes. It is advisable to consult with a healthcare provider for further testing." 
                    title="High Risk" 
                    color="red" 
                    />
                ) : showResult2 ? (
                    <Result 
                        resultText="You may be at risk for diabetes. Consider making lifestyle changes and consult a healthcare professional." 
                        title="Moderate Risk" 
                        color="yellow" 
                    />
                ) : showResult3 ? (
                    <Result 
                    resultText="It's unlikely that you have diabetes, but maintain a healthy lifestyle and keep monitoring your health." 
                        title="Low Risk" 
                        color="green" 
                        
                    />
                ) : (
                    <div className="flex justify-center pt-32">
                        <div className="bg-white w-[350px] sm:w-[450px] py-16 px-5 sm:p-5 rounded">
                            <h1 className="font-bold">{questions[index].question}</h1>
                            <ul>
                                <li 
                                    onClick={() => handleAnswer(questions[index].option1)} 
                                    className={`mt-2 cursor-pointer border-4 p-3 rounded-full ${color === 1 ? "border-green-500" : ""}`}
                                >
                                    {questions[index].option1}
                                </li>
                                <li 
                                    onClick={() => handleAnswer(questions[index].option2)} 
                                    className={`mt-2 cursor-pointer border-4 p-3 rounded-full ${color === 2 ? "border-green-500" : ""}`}
                                >
                                    {questions[index].option2}
                                </li>
                                <li 
                                    onClick={() => handleAnswer(questions[index].option3)} 
                                    className={`mt-2 cursor-pointer border-4 p-3 rounded-full ${color === 3 ? "border-green-500" : ""}`}
                                >
                                    {questions[index].option3}
                                </li>
                            </ul>
                            <button 
                                onClick={handleNextQuestion} 
                                className="bg-red-500 text-white p-2 mt-10 rounded-full w-[300px] sm:w-[400px]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Test
