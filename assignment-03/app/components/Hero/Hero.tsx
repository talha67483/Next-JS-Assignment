import Link from "next/link";
export default function HeroSection() {
    return (
      <div className="relative min-h-screen overflow-hidden">
      
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative top-32 max-w-3xl font-Manrope">
            <h1 className="text-5xl font-extrabold sm:text-7xl">
           This Hero Section is Designed by Tailwind CSS
            </h1>
            <p className="my-4 font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt in maiores facilis distinctio adipisci soluta consequuntur ex, magnam deserunt, veritatis minus debitis praesentium!
            </p>
            <div className="flex justify-center">
              <Link href="https://tailwindcss.com/" target="_blank"><button className="m-1 rounded-xl  bg-[#FF00E5] px-16 py-3">
                Learn More
              </button></Link>
            
            </div>
          </div>
        </div>
        <div className="relative   top-[10vh] max-w-full sm:top-0 ">
          <div className="absolute w-full object-contain">
            <img src="circle.png" alt="" className="relative  object-fill" />
          </div>
        </div>
      </div>
    );
  }
                 
  