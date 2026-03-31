"use client";
import Search from "@/common/search";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/breadcrumbs";
import CourseTitleBar from "./titleBar";


export default function Courses() {
  return(
    <main className={"flex flex-col grow w-full"}>
      <Breadcrumbs items={[{label: "Kurslar", link: '/courses'}]} />
      <CourseTitleBar/>
      <Search/>

    </main>
  )
}