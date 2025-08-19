import Link from "next/link"

export default function ButtonCommponant(){
    const Buttoncommponantlist=[
        {id:1,name:"تسجيل الدخول",src:"log"},
        {id:2,name:" أنشاء حساب",src:"logo"},
    ]
    const myButton = Buttoncommponantlist.map((button)=>{
        return(
            <button key={button.id} className={"bg-black mt-5 text-white px-3 py-2 rounded-2xl"}>
             <Link href={button.src}>{button.name}</Link>
        </button>
        )
    })
    return(
       <div className={" gap-5"}>
        {myButton}
       </div>
    )
}