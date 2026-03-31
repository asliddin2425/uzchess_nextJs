import { Breadcrumbs } from "@/components/shared/breadcrumbs/breadcrumbs";
import {getOneNews} from "@/lib/api/news";
import {Metadata} from "next";
import Editor from "@/components/news/editor/editor";

// export const metadata: Metadata = {
//   title: ".",
// }

const NewsDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const news = await getOneNews(Number(id));

  return (
    <main className="flex flex-col grow w-full">
      <Breadcrumbs
        items={[
          { label: "Yangiliklar", link: "/news" },
          { label: news.title, link: `/news/${id}` },
        ]}
      />
      <Editor />
    </main>
  );
};

export default NewsDetailPage;