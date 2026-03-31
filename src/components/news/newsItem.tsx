"use client";
import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

interface Props {
    news: News
}
export default function NewsItem({news}: Props) {
    return (
        <Link href={`/news/${news.id}`}>
            <article className="flex flex-col w-81.5 h-62.75 rounded-lg p-3 bg-[#1A1D1F] hover:cursor-pointer hover:scale-105 transition-all duration-100 ease-out active:scale-104 -ml-50">
                <Image src={news.image} alt={news.title} width={302} height={113} 
                className="w-75.5 h-28.25 rounded-t-sm object-cover object-[0_-10px] overflow-hidden "/>
                <p className="text-[#F7F9FA]/40 mt-1.75">{news.date}</p>
                <h3 className="text-[#F7F9FA] text-[14px] cursor-pointer hover:text-[#1C92E0] transition">{news.title}</h3>
                <h3 className="text-[#888888] text-[14px]">{news.content}</h3>
            </article>
        </Link>    
    )
}