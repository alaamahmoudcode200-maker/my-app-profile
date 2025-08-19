import Image from "next/image"
export default function CarouselCommponant(){
    return(
        <div className="px-10">
  <div className="carousel w-full rounded-3xl">
  <div id="slide1" className="carousel-item relative w-full">

    <Image alt="img"
      src="/home.png"
      width={500}
      height={400}
      className="w-full" style={{
        height:400
      }
      } />
       <div className="absolute inset-0 bg-black opacity-50"></div> 
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75 ">❮</a>
      <a href="#slide2" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Image alt="img"
       src="/div.png"
       width={500}
       height={100}
      className="w-full" style={{
        height:400
      }
      } />
       <div className="absolute inset-0 bg-black opacity-50"></div> 
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75 ">❮</a>
      <a href="#slide3" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <Image alt="img"
       src="/home.png"
       width={500}
       height={400}
      className="w-full" style={{
        height:400
      }
      } />
       <div className="absolute inset-0 bg-black opacity-50"></div> 
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75">❮</a>
      <a href="#slide4" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <Image alt="img"
        src="/home.png"
        width={500}
        height={400}
      className="w-full" style={{
        height:400
      }
      } />
       <div className="absolute inset-0 bg-black opacity-50"></div> 
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75">❮</a>
      <a href="#slide1" className="btn btn-sm btn-circle text-white  bg-gray-400 opacity-75">❯</a>
    </div>
  </div>
</div>
</div>
    )
}