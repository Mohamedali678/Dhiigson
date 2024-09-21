function Header() {


    return <div className="bg-red-500 text-white flex justify-between py-4 px-10">
        
        <h1 className="text-3xl" >Dhiigson</h1>
        
        <ul className="flex gap-20 text-2xl text-white">
            <li className="hover:text-white hover:underline  hover:cursor-pointer " >Home</li>
            <li className="hover:text-white hover:underline hover:cursor-pointer " >About</li>
            <li className="hover:text-white hover:underline hover:cursor-pointer " >Pricing</li>
            <li className="hover:text-white hover:underline hover:cursor-pointer " >Contact</li>
        </ul>
    </div>
}

export default Header