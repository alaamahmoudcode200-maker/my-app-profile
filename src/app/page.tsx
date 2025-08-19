import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans  bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex bg-white flex-col gap-[32px] row-start-2 items-center sm:items-start">
     <Image src="/div.png" alt="imag" width={500} height={500}/>
      </main>
   
    </div>
  );
}
