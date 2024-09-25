import Link from "next/link"

function Header() {


    return <div className="bg-red-500 text-white flex justify-between py-4 px-10">
        
        <h1 className="sm:text-3xl" >Dhiigson</h1>
        
        <ul className="flex sm:gap-20 gap-4 sm:text-2xl text-white">
          <Link href="/">  <li className="hover:text-white hover:underline  hover:cursor-pointer " >Home</li> </Link> 
           <Link href="/page/about"> <li className="hover:text-white hover:underline hover:cursor-pointer " >About</li>  </Link>
          <Link href="#pricing">   <li className="hover:text-white hover:underline hover:cursor-pointer " >Pricing</li> </Link>
          <Link href="#footer">   <li className="hover:text-white hover:underline hover:cursor-pointer " >Contact</li> </Link>
        </ul>
    </div>
}

export default Header