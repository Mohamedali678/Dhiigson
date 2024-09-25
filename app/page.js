import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return <div>

    <Header />
    <div className="pt-32 h-[400px] flex justify-center bg-no-repeat bg-cover object-cover bg-[url(https://img.freepik.com/free-photo/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file_1387-942.jpg?t=st=1727285417~exp=1727289017~hmac=5b480086785ffab0ab60819cf0cf71f3442379b1b467a664d16bfa77da410533&w=740)]">
    <div>
    <Link className="bg-red-400 text-2xl rounded-full px-14 py-3 mt-20" href="/page/test">Take a Test</Link>
    </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-evenly px-10 my-20" >
      <div className="sm:w-[500px]">

      <h1 className="font-bold text-4xl mb-4 border-b-4 border-red-400">About us</h1>
      <p className="leading-8">Dhiigson is a dedicated health application designed specifically for individuals managing diabetes. Our platform combines cutting-edge technology with user-friendly features to empower users in their health journey. We understand the challenges faced by people living with diabetes, and our goal is to provide comprehensive support, education, and tools that promote better health management. With personalized insights and a community-focused approach, Dhiigson aims to improve the quality of life for those affected by diabetes.
    </p>
      </div>
      <img className="w-[600px] rounded" src="https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?t=st=1727284977~exp=1727288577~hmac=9c5de199bcb1e979bc6ba906b1068bfead349188f845e1a07830d1b9d1375b63&w=740" />
    </div>

{/* Pricing cards */}


    <div id="pricing" class="container my-20  px-10 sm:px-20">
        <h1 class="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* <!-- Basic Plan --> */}
            <div class="card bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">Basic Plan</h2>
                <p class="text-2xl font-bold mb-4">$9.99/month</p>
                <ul class="mb-6">
                    <li class="mb-2">Daily Blood Sugar Monitoring</li>
                    <li class="mb-2">Basic Nutrition Tracking</li>
                    <li class="mb-2">Community Support</li>
                </ul>
                <a href="https://wa.me/+252615624585">
                <button class="bg-red-800 text-white py-2 px-4 rounded-lg">Select Plan</button>
                </a>
            </div>

            {/* <!-- Standard Plan --> */}
            <div class="card bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">Standard Plan</h2>
                <p class="text-2xl font-bold mb-4">$19.99/month</p>
                <ul class="mb-6">
                    <li class="mb-2">All Basic Features</li>
                    <li class="mb-2">Advanced Nutrition Tracking</li>
                    <li class="mb-2">Personalized Insights</li>
                    <li class="mb-2">Monthly Health Reports</li>
                </ul>
                <a href="https://wa.me/+252615624585">
                <button class="bg-red-800 text-white py-2 px-4 rounded-lg">Select Plan</button>
            </a>
            </div>

            {/* <!-- Premium Plan --> */}
            <div class="card bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">Premium Plan</h2>
                <p class="text-2xl font-bold mb-4">$29.99/month</p>
                <ul class="mb-6">
                    <li class="mb-2">All Standard Features</li>
                    <li class="mb-2">24/7 Health Monitoring</li>
                    <li class="mb-2">One-on-One Coaching</li>
                    <li class="mb-2">Custom Meal Plans</li>
                </ul>
                <a href="https://wa.me/+252615624585">
                <button class="bg-red-800 text-white py-2 px-4 rounded-lg">Select Plan</button>
            </a>
            </div>

        </div>
        </div>

    {/* Mission and vision */}

      

{/* Footer */}

 <Footer />  
  </div>
  
}
