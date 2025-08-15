import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-[1fr_40fr_1fr] md:grid-cols-[2.5fr_0.3fr_10fr_0.3fr_2.5fr] grid-rows-[1fr_4fr_6fr_1.5fr] ">

        {/* banner */}
        <div className=" m-0 p-0 border-r-1  border-b-1 border-black ">1</div>
        <div className="border-r-1  border-b-1 border-black ">2</div>
        <div className="  border-r-1  border-b-1  border-black ">3</div>
        <div className="  border-r-1  border-b-1 border-black">4</div>
        <div className="  border-r-1  border-b-1">5</div>
        <div className=" border-r-1  border-b-1 border-black ">6</div>
        <div className=" border-r-1  border-b-1 border-black ">7</div>
        <div className=" border-r-1  border-b-1 border-black ">8</div>
        <div className=" border-r-1  border-b-1 border-black ">9</div>
        <div className=" border-r-1  border-b-1 border-black ">10</div>
        <div className=" border-r-1  border-b-1 border-black ">11 </div>
        <div className=" border-r-1  border-b-1 border-black ">12</div>
        <div className=" border-r-1  border-b-1 border-black grid grid-cols-[1fr_5fr]">
          <div className="border-r-1  border-black">13</div>
          <div className="  grid grid-rows-[1fr_1fr]">
            
            <div className="border-b text-5xl pt-6 pl-2">Hello</div>
            <div className="text-5xl pt-6 pl-2"> I'm Siddhant </div>
          </div>
        </div>
        <div className=" border-r-1  border-b-1 border-black ">14</div>
        <div className=" border-r-1  border-b-1 border-black ">15</div>
        <div className=" border-r-1  border-b-1 border-black ">16</div>
        <div className=" border-r-1  border-b-1 border-black ">17</div>
        <div className=" border-r-1  border-b-1 border-black grid grid-rows-[0.9fr_0.5fr]">
          <div></div>
          <div className="text-lg text-black text-sm m-0 p-0">text-lg text-white font-medium</div>
        </div>
        <div className=" border-r-1  border-b-1 border-black ">19</div>
        <div className=" border-r-1  border-b-1 border-black ">20</div>
      </div>

      {/* profile section */}
      {/* <div className="grid grid-cols-[1fr_40fr_1fr] md:grid-cols-[1fr_2fr_1fr] grid-rows-[10fr_2fr] md:grid-rows-[14fr_2fr] ">
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
    </div> */}
    </div>
  );
}
