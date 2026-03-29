import Image from "next/image"
import { LanguageSelector } from "./language"
import { Divider } from "../divider"

export const LeftSide = () => {
    return(
        <section className={"flex gap-5 items-center mr-5 w-64.25 h-6"}>
            <Image src={"/icons/logo.svg"}
                alt="logo"
                width={104}
                height={20}

                className={"mt-0 h-8 object-cover overflow-visible object-bottom"}
            />
            <Divider/>
            <LanguageSelector/>
        </section>
    )
}