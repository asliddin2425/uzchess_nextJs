import { Books } from "@/types/books";

export default async function getAllBooks(): Promise<Books[]>{
    const res = await fetch("http://localhost:3000/public/books", {
        cache: "force-cache",
        next: {revalidate: 60}
    })
    return res.json();
}