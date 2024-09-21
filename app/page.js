import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return <div>

    <Header />
    <div className="mt-32 flex justify-center">

    <Link className="bg-red-400 text-2xl rounded-full px-14 py-3 mt-20" href="/page/test">Take a Test</Link>
    </div>
  </div>
  
}
