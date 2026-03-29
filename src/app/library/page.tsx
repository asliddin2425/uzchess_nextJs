import getAllNews from "@/lib/api/news";

export default async function BooksPage () {
    const data = await getAllBooks()
    return(
        <main>
            <h1>Books Page</h1>
        </main>
    )
}