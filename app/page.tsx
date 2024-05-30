import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <div className="shadow-md p-10 w-full rounded-large bg-white ">
        <div className="md:flex">
          <p className="w-full mx-width-lg font-medium  tracking-wider  text-3xl md:text-4xl">
            We Tried To Provide You <br />
            with All Global Banking <br />
            Services.
          </p>
          <div className="w-full space-y-5">
            <p className="capitalize">We made every effort to ensure that you have access to a Comprehensive range of global banking services.Our aim was to provide you with a seamless banking experiences that caters to your financial need regardless to your location</p>
            <button className='text-white bg-black text-sm rounded-full px-4 py-1 flex items-center space-x-5'>
              <p className='text-sm font-medium'>Explore</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
