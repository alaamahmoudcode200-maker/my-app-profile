import Header from "./componant/heder/heder";
import CarouselCommponant from "./componant/carousel/carousel";
export default function HomePage() {

 
  return (
    <main className="h-screen   grid grid-cols-6  bg-white flex-col gap-5 row-start-2 items-center sm:items-start">
      <div className="col-span-1  h-full">
         <Header/>
      </div>
     <div className={"h-full col-span-5 px-10"}>
       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br ">

  <div className="backdrop-blur-md bg-white/30 p-6 rounded-xl shadow-lg border border-white/20">
<CarouselCommponant/>
  </div>
</div>
     </div>
      
    </main>
  );
}
