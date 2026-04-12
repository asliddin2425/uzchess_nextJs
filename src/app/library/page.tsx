
import getAllBooks from "@/lib/api/books";

import { Breadcrumbs } from "@/components/shared/breadcrumbs/breadcrumbs";
import BooksTitleBar from "./titleBar";
import Search from "@/common/search";
import BooksItems from "@/components/library/libraryItems";
import { Books } from "@/types/books";

export default async function BooksPage () {
    const books = await getAllBooks()
    console.log(books);
    
    return(
        <main className={"flex flex-col grow w-full"}>
            <Breadcrumbs items={[{label: "Kutubxona", link: "/books"}]}/>
            <BooksTitleBar/>
            <Search/>
            <div>
              {books.map((booksItem: Books) => <BooksItems key={booksItem.id} books={booksItem}/>)}
            </div>
        </main>
    )
}