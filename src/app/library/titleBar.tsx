import Image from "next/image"
export default function BooksTitleBar () {
    return(
        <div className="flex flex-row items-center justify-center w-81.5 h-25 bg-[#191C1E] text-[32px] text-center font-bold rounded-xl ml-2 border-[#232627] border">
            <Image src={"/icons/books.svg"} alt="booksIcon" width={144} height={144}/>
            <h1 className="-ml-10">Kutubxona</h1>
        </div>
    )
}