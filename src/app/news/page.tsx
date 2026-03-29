
import NewsItem from "@/components/news/newsItem";
import getAllNews from "@/lib/api/news"
import { Breadcrumbs } from "@/components/shared/breadcrumbs/breadcrumbs";
import { TitleBar } from "@/components/news/titlebar";
export default async function NewsPage () {
    const data = await getAllNews();
    return (
        <main className={"flex flex-col grow w-full"}>
            <Breadcrumbs items={[{label: 'Yangiliklar', link: '/news'}]}/>
            <TitleBar/>
            <div className="self-center grid justify-center mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,20.375rem)] gap-6">
            {/* {data.map((item) => <NewsItem key={item.id} news={item}/>)} */}
            {/* {data.data.map((item) => (<NewsItem key={item.id} news={item} />))} */}
            {Array.isArray(data) && data.map((item) => (<NewsItem key={item.id} news={item} />))}
            </div>
        </main>
    )
}