"use client"
function Result({resultText, title, color}){

    return <div className="flex justify-center pt-32">

    <div className="bg-white w-[350px] sm:w-[450px] py-16 px-5 sm:p-5 rounded" >
        <h1 className="font-bold"> Results </h1>
        <ul>
            <h1 className="font-bold text-2xl" style={{color: color}} > {title} </h1>
            <h1>{resultText}</h1>
            </ul>
        <button  className="bg-red-500 text-white p-2 mt-10 rounded-full w-[300px] sm:w-[400px]">Contact doctor</button>
    </div>

    </div>
}

export default Result