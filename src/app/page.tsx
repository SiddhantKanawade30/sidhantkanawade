import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen ">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-blue-500 grid grid-cols-[.5fr_0.3fr_12fr_0.3fr_.5fr] sm:grid-cols-[2fr_0.3fr_12fr_0.3fr_2fr]">
        {/* Column 1 */}
        <div className="border-r border-gray-700"></div>
        
        {/* Column 2 - with diagonal lines */}
        <div className="border-r border-gray-700 sm:bg-[repeating-linear-gradient(-45deg,transparent,transparent_3px,rgba(0,0,0,.3)_3px,rgba(0,0,0,.3)_4px)]"></div>
        
        {/* Column 3 */}
        <div className="border-r border-gray-700"></div>
        
        {/* Column 4 - with diagonal lines */}
        <div className="border-r border-gray-700 sm:bg-[repeating-linear-gradient(-45deg,transparent,transparent_3px,rgba(0,0,0,.3)_3px,rgba(0,0,0,.3)_4px)]"></div>
        
        {/* Column 5 */}
        <div></div>

      </div >
      <Hero />
    </div>
  );
}