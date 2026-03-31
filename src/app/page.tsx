"use client";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/breadcrumbs";


export default function Home() {
  return <main className={"flex flex-col grow w-full text-center"}>
    <Breadcrumbs />
    <h1>Main Page</h1>
  </main>
}