import Image from "next/image"
export default function Search() {
    return(
        <div className=" flex  w-169 h-13 bg-[#15181A] ml-89.5 rounded-lg -mt-25 border-[#232627] border">
            <Image src={"/icons/search.svg"} alt="searching" width={24} height={24} className="ml-4">

            </Image>
            <input type="text" placeholder="izlash" className="outline-0"/>
        </div>
    )
}