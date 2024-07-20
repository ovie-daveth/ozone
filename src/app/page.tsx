import { FaCode } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-600 px-10 py-5">
      <header className="flex items-center justify-between">
        <div>
          <div className={`flex items-center gap-2`}>
                  <div className='bg-blue-600 p-2 rounded-md'><FaCode size="30px" color="white" /></div>
                  <h1 className={` text-text-secondary}`}>Ozone CodeDocs</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-blue-600 text-white border-blue-600 border-2 rounded-md w-[80px] py-1">Sign Up</button>
          <button className="border-blue-600 border-2 rounded-md w-[80px] py-1">Sign in</button>
        </div>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
