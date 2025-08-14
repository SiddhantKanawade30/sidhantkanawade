import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-[1fr_40fr_1fr] md:grid-cols-[1fr_2fr_1fr] grid-rows-[2fr_22fr] ">
      
      {/* banner */}
        <div className=" m-0 p-0 border-b-1 border-black ">1</div>
        <div className=" border-b-1  border-r-1  border-l-1 ">2</div>
        <div className=" border-b-1  border-black ">3</div>
        <div className=" m-0 p-0 border-b-1 border-black">4</div>
        <div className=" border-b-1  border-r-1  border-l-1 ">5</div>
        <div className=" border-b-1  border-black">6</div>
    </div>

{/* profile section */}
    <div className="grid grid-cols-[1fr_40fr_1fr] md:grid-cols-[1fr_2fr_1fr] grid-rows-[10fr_2fr] md:grid-rows-[14fr_2fr] ">
        <div className=" m-0 p-0 border-b-1 border-black ">1</div>
        <div className=" border-b-1  border-r-1  border-l-1 grid grid-cols-[1.2fr_4fr]">
          <div className="border-r-1">profile pic</div>
          <div className="grid grid-rows-[3fr_2fr_1fr]">
            <div className="border-b-1">leaky code</div>
            <div className="border-b-1">name</div>
            <div>popular posts</div>
          </div>
        </div>
        <div className=" border-b-1  border-black ">3</div>
        <div className=" m-0 p-0 border-b-1 border-black">4</div>
        <div className=" border-b-1  border-r-1  border-l-1 ">5</div>
        <div className=" border-b-1  border-black">6</div>
    </div>
    </div>
  );
}
