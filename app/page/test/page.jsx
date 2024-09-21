
"use client"
import { useState } from "react"
import questions from "../../components/questions"

function Test(){

    const [index, setIndex] = useState(0)

    const handleNextQuestion = () => {
        if(index < questions.length - 1){
            setIndex(index + 1)
        }
    }

    return <div className="h-screen  bg-gradient-to-t from-red-300 to-blue-300" >
        
        <div className="flex justify-center pt-32">

        <div className="bg-white w-[350px] sm:w-[450px] py-16 px-5 sm:p-5 rounded" >
            <h1 className="font-bold"> {questions[index].question} </h1>
            <ul>
                <li className="mt-2 cursor-pointer border-4 p-3 rounded-full" >{questions[index].option1} </li>
                <li className="mt-2 cursor-pointer border-4 p-3 rounded-full" > {questions[index].option2} </li>
                <li className="mt-2 cursor-pointer border-4 p-3 rounded-full" >{questions[index].option3}</li>
                {/* <li className="mt-2 cursor-pointer border-4 p-3 rounded-full" >Option 4</li> */}
            </ul>
            <button onClick={handleNextQuestion} className="bg-red-500 text-white p-2 mt-10 rounded-full w-[300px] sm:w-[400px]">Next</button>
        </div>

        </div>


    </div>
}

export default Test