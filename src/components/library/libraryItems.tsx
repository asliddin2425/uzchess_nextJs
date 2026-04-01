"use client"

import { Books } from "@/types/books"
import Image from "next/image"

interface Props {
    books: Books
}

export default function BooksItems({books}: Props) {
    return(
        <article className=" flex w-169 h-54.25 bg-[#1A1D1F] rounded-xl mt-5 ml-89.5">
            <Image src={books.image} alt={books.title} width={132} height={177} className="m-5"/>
            <h1 className="text-lg text-white font-bold mt-6.5">{books.title}</h1>
            <h6 className="mt-14.5 -ml-95 text-xs text-[#A7AAAB] font-normal line-through decoration-red-500">{books.price} uzs</h6>
            <h6 className="mt-18.75 -ml-20 text-[#82CC27] font-bold text-[15px]">{books.newPrice} uzs</h6>
            
            <div className="flex flex-row justify-between w-86.5 h-6  mt-27.25 -ml-23 text-[#9FA1A2]">
                <h6 className="hover:cursor-pointer active:scale-[0.98]">{books.difficultyId} Boshlang'ich</h6>
                <div className="w-px h-5 bg-[#3D4549] ml-3 mr-3"></div>
                <div className="flex flex-row w-max hover:cursor-pointer active:scale-[0.98]">
                    <Image src={"/icons/category-icon.svg"} width={24} height={24} alt="icons"/>
                    <h6>{books.categoryId} Adabiyot</h6>
                </div>
                <div className="w-px h-5 bg-[#3D4549] ml-3 mr-3"></div>
                <div className="flex flex-row w-max hover:cursor-pointer active:scale-[0.98]">
                    <Image src={"/icons/icons-user 1.svg"} width={24} height={24} alt="icons"/>
                    <h6>{books.authorId} Robert Fisher</h6>
                </div>
            </div>

            <button className=" flex  flex-row w-49.5 h-10 bg-[#1C92E0] mt-39.25 -ml-88 rounded-lg hover:cursor-pointer active:scale-[0.98]">
                <Image src={"/icons/empty-cart.svg"} alt="icon" width={20} height={20} className="ml-8.75"/>
                <h1 className="font-medium text-base text-[white] text-center mt-2.5 ml-2.5">Savatchaga</h1>
            </button>
            <button></button>
        </article>
    )
}