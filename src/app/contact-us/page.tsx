"use client";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/breadcrumbs";


export default function ContactsUs() {
  return(
    <main className={"flex flex-col grow w-full"}>
      <Breadcrumbs items={[{label: "Bog'lanish", link: '/contact-us'}]} />
      <h1>Contacts Page</h1>
    </main>
  )
}