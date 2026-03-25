import { News } from "@/types/news";

export default async function getAllNews (): Promise<News[]> {
    let res = await  fetch("http://localhost:3000/public/news", {
        cache: "force-cache",
        next: {revalidate: 60},
    })

    return res.json();

}