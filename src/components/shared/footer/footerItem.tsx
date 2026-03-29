import Image from 'next/image';
import Link from "next/link";
import {SocialLink} from "../footer/socialLink";

export const FooterItem = () => {
  return (
    <div className={"flex flex-col gap-4 items-center bg-(--dark) pt-8 pb-6"}>
      <Image src={'/icons/logo.svg'} alt={'Site logo'} width={104} height={4} className={"w-28"}/>
      <section className={"flex gap-6"}>
        <Link href={'/about-us'}>Biz haqimizda</Link>
        <Link href={'/about-us'}>Cookie fayllari siyosati</Link>
        <Link href={'/about-us'}>Foydalanish qoidalari</Link>
        <Link href={'/about-us'}>Cookie fayllari siyosati</Link>
        <Link href={"/about-us"}>Biz bilan bog'lanish</Link>
      </section>
      <section className={"flex gap-6"}>
        <SocialLink icon={'/icons/instagram.svg'} url={'/url'}/>
        <SocialLink icon={'/icons/telegram.svg'} url={'/url'}/>
        <SocialLink icon={'/icons/youtube.svg'} url={'/url'}/>
        <SocialLink icon={'/icons/twitter.svg'} url={'/url'}/>
        <SocialLink icon={'/icons/fb.svg'} url={'/url'}/>
      </section>
    </div>
  );
};