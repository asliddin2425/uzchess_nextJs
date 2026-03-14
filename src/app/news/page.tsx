
import NewsItem from "@/components/news/newsItem";
import getAllNews from "@/lib/api/news"

export default async function NewsPage () {
    const data = await getAllNews();
    console.log(data);
    return (
        <div className="flex flex-col w-30 h-20 bg-[red]">
            <h1>News Page</h1>
            {data.map((item) => <NewsItem key={item.id} news={item}/>)}
        </div>
    )
}