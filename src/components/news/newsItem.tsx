"use client";
import { News } from "@/types/news";
import Image from "next/image";

interface Props {
    news: News
}
export default function NewsItem({news}: Props) {
    return (
        <article className="w-81.5 h-62.75 rounded-lg bg-(--dark) p-3 ">
            <Image src={news.image} alt={news.title} width={302} height={113}/>
            {/* <p>{news.date}</p> */}
            <h3>{news.title}</h3>
            <h4>{news.content}</h4>
        </article>
    )
}