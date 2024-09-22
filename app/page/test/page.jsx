
"use client"
import { useState } from "react"
import Result from "../../components/Result"
import questions from "../../components/questions"

function Test(){

    const [index, setIndex] = useState(0)
    const [testScore, setTestScore] = useState(0)
    const [color, setColor] = useState(0)
    const [showResult, setShowResult] = useState(0)

    const handleNextQuestion = () => {

        if(index == questions.length - 1){
            showAllResult()
        }
       
        if(index < questions.length - 1){
            setIndex(index + 1)
        }
        setColor(0)
    }


    const showAllResult = () => {
        if(testScore >= 7 && testScore <= 10 ){
        setShowResult(1)
    }
    else if(testScore >= 4 && testScore <= 6){
        setShowResult(2)
    }
    else if(testScore > 0 && testScore <= 3) {
        setShowResult(3)
    }

    }

    
    const handleAnswer = (e) => {
        if(e === "Yes"){
            console.log(e)
            setTestScore(testScore + 1)
            setColor(1)
        }
        else if(e === "No"){
            // setTestScore(testScore + 1)
            setColor(2)
        }
        else {
            // setTestScore(testScore + 1)
            setColor(3)
            console.log(e)
            console.log("Ma qabtid")

        }
    }

  

    return <div className="h-screen  bg-gradient-to-t from-red-300 to-blue-300" >
        
        {
           
          showResult === 1 ? <Result color="red" title="Hight risk." resultText="Your answers indicate a higher risk of having diabetes. It is advisable to consult with a healthcare provider for further testing." /> :
          showResult === 2 ? <Result color="lightblue" title="Moderate Risk" resultText="You may be at risk for diabetes. Consider making lifestyle changes and consult a healthcare professional." /> :
          showResult === 3 ? <Result color="green" title="Low Risk" resultText="It's unlikely that you have diabetes, but maintain a healthy lifestyle and keep monitoring your health." /> :

            <div className="flex justify-center pt-32">

        <div className="bg-white w-[350px] sm:w-[450px] py-16 px-5 sm:p-5 rounded" >
            <h1 className="font-bold"> {questions[index].question} </h1>
            <ul>
                <li onClick={() => handleAnswer(questions[index].option1)}   className={` ${color === 1 ? "border-4 border-green-500" : ""} mt-2 cursor-pointer border-4 p-3 rounded-full`} >{questions[index].option1} </li>
                <li onClick={() => handleAnswer(questions[index].option2)} className={`  ${color === 2 ? "border-4 border-green-500" : "" } mt-2 cursor-pointer border-4 p-3 rounded-full` }> {questions[index].option2} </li>
                <li onClick={() => handleAnswer(questions[index].option3)} className={`  ${color === 3 ? "border-4 border-green-500" : ""} mt-2 cursor-pointer border-4 p-3 rounded-full`} >{questions[index].option3}</li>
                {/* <li className="mt-2 cursor-pointer border-4 p-3 rounded-full" >Option 4</li> */}
            </ul>
            <button onClick={handleNextQuestion} className="bg-red-500 text-white p-2 mt-10 rounded-full w-[300px] sm:w-[400px]">Next</button>
        </div>

        </div>

}


    </div>
}

export default Test