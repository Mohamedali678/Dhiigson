import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

function About(){

    return <div>
        <Header />
        
    <div className="flex flex-col sm:flex-row justify-evenly px-10 my-20" >
      <div className="sm:w-[500px]">

      <h1 className="font-bold text-4xl mb-4 border-b-4 border-red-400">About us</h1>
      <p className="leading-8">Dhiigson is a dedicated health application designed specifically for individuals managing diabetes. Our platform combines cutting-edge technology with user-friendly features to empower users in their health journey. We understand the challenges faced by people living with diabetes, and our goal is to provide comprehensive support, education, and tools that promote better health management. With personalized insights and a community-focused approach, Dhiigson aims to improve the quality of life for those affected by diabetes.
    </p>
      </div>
      <img className="w-[600px] rounded" src="https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?t=st=1727284977~exp=1727288577~hmac=9c5de199bcb1e979bc6ba906b1068bfead349188f845e1a07830d1b9d1375b63&w=740" />
    </div>

        
    <div className="flex justify-evenly px-10 flex-col sm:flex-row my-32 " >
      <div className="sm:w-[500px] p-2 mt-4 sm:mt-0 rounded border-2 ">
      <h1 className="font-bold text-4xl my-3" > Mission </h1>
Our mission at Dhiigson is to enhance the lives of individuals with diabetes by providing accessible, reliable, and innovative health management solutions. We are committed to offering personalized resources, real-time monitoring, and educational content that empower our users to take control of their health and make informed decisions.  </div>
      <div className="sm:w-[600px] p-2 mt-4 sm:mt-0 rounded border-2 ">
    <h1 className="font-bold text-4xl my-3" >   Vision </h1>
      Our vision is to be a leading global health application for diabetes management, fostering a supportive community where individuals can thrive. We aspire to create a world where everyone with diabetes has the tools, knowledge, and support necessary to live healthier, happier lives. Through continuous innovation and collaboration, we aim to transform diabetes care and promote holistic wellness.
      </div>
    </div>
    
    <Footer />
    </div>
}

export default About