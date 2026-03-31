import {News} from "@/types/news";

export async function getNews(): Promise<News[]> {
  try {
    const res = await fetch('http://localhost:3000/public/news', {
      cache: 'force-cache',
      next: {
        revalidate: 60,
      }
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    data.forEach((x: any) => x.date = Date.parse(x.date));
    return data;

  } catch {
    return [];
  }

}

// export default async function getAllNews (): Promise<News[]> {
//     let res = await  fetch("http://localhost:3000/public/news", {
//         cache: "force-cache",
//         next: {revalidate: 60},
//     })

//     return res.json();

// }
export async function getOneNews(id: number): Promise<News> {
  const res = await fetch(`http://localhost:3000/public/news/${id}`, {
    cache: 'force-cache',
    next: {
      revalidate: 60,
    }
  });
  const data = await res.json();
  data.date = Date.parse(data.date);
  return data;


}