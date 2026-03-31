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
        </article>
    )
}