"use client";
import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/breadcrumbs";
import Banner1 from "@/components/shared/banners/banner1";
import Banner2 from "@/components/shared/banners/banner2";


export default function ContactsUs() {
  return(
    <main className={"flex flex-col grow w-full"}>
      <Breadcrumbs items={[{label: "Bog'lanish", link: '/contact-us'}]} />
      <article className="w-5xl h-114.25 bg-[#1A1D1F] mt-7.5 ml-8.5 rounded-xl border border-[#1F272A]">
        <h1 className="text-white text-[28px] font-bold ml-6 mt-6 mb-5.25">Bog'lanish</h1>

        <div className=" w-163 h-88  ml-6 border border-[#1A2226] rounded-xl">

          <div className="flex flex-row justify-between w-153 h-17.75  ml-5 mt-5 ">
            <div className="flex flex-col justify-between w-74 h-17.75">
              <p className="font-medium text-[#9DA1A3] text-[15px]">Siz bilan boglanish</p>
              <input type="text" placeholder="Ism familiyangizni kiriting" className="w-74 h-11 border border-[#36393B] rounded-lg outline-0 text-[16px] pl-4 bg-[#13181C]" />
            </div>
            <div className="flex flex-col justify-between w-74 h-17.75">
              <p className="font-medium text-[#9DA1A3] text-[15px]">Telefon raqamingiz</p>
              <div className="flex flex-row items-center justify-between w-74 h-11 bg-[#1A1D1F] border border-[#36393B] rounded-lg pl-4">
                <div>+998</div>
              <input type="tel" maxLength={9} placeholder="-- --- -- --" className="w-50 h-10 rounded-tr-lg rounded-br-lg  outline-0 text-[16px] pl-4 bg-[#13181C] pt-2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-153 h-38.5  ml-5 mt-4.5">
            <p className="font-normal text-[14px] text-white">Shikoyat</p>
            <div className="w-153 h-32 border border-[#454F54] rounded-xl bg-[#13181C]">
              <input type="text" placeholder="Matnni yozing ..." className=" w-full pl-4 outline-0"/>
            </div>
            
          </div>

          <div className="flex flex-row justify-between w-153 h-11  ml-5 mt-6">
            <div className="flex flex-row w-81.25 h-10.5">
              <input type="checkbox" className="w-5 h-5 border border-[#2E393F] rounded-sm ml-0.5 mt-2.75" />
              <p className="flex w-72 h-10 font-medium text-[16px] ml-2 -mt-1">Foydalanish shartlari va qoidalarini qabul qilaman</p>
            </div>
            <button className="w-45 h-11 bg-[#1C92E0] rounded-lg text-[16px] font-medium hover:cursor-pointer active:scale-[0.98]">Yuborish</button>
          </div>
        </div>

        <div className="flex flex-col w-76 h-87.75 ml-175 -mt-88">
          <div className=" flex items-center w-70 h-18 border border-[#1A2226] rounded-lg" >
            <Image src={"/icons/calendar.png"} alt="icons" width={28} height={28} className="ml-3" />
            <div className="flex flex-col justify-between w-60 h-10 ml-3">
              <p className="text-[14px] text-[#9DA1A3] font-medium">Ish vaqti</p>
              <h3 className="text-[16px] font-medium text-white -mt-3">Dushanba-Juma 9:00-18:00</h3>
            </div>
          </div>
          <div className=" flex items-center w-70 h-18 border border-[#1A2226] rounded-lg" >
            <Image src={"/icons/calendar.png"} alt="icons" width={28} height={28} className="ml-3" />
            <div className="flex flex-col justify-between w-60 h-10 ml-3">
              <p className="text-[14px] text-[#9DA1A3] font-medium">E-mail</p>
              <h3 className="text-[16px] font-medium text-white -mt-3">info@chessnation.uz</h3>
            </div>
          </div>

          <div className=" flex items-center w-70 h-18 border border-[#1A2226] rounded-lg" >
            <Image src={"/icons/calendar.png"} alt="icons" width={28} height={28} className="ml-3" />
            <div className="flex flex-col justify-between w-60 h-10 ml-3">
              <p className="text-[14px] text-[#9DA1A3] font-medium">Telefon</p>
              <h3 className="text-[16px] font-medium text-white -mt-3">+998 (71) 203 55 11</h3>
            </div>
          </div>

          <div className=" flex items-center w-70 h-18 border border-[#1A2226] rounded-lg" >
            <Image src={"/icons/calendar.png"} alt="icons" width={28} height={28} className="ml-3" />
            <div className="flex flex-col justify-between w-60 h-10 ml-3">
              <p className="text-[14px] text-[#9DA1A3] font-medium">Yaqin metro</p>
              <h3 className="text-[16px] font-medium text-white -mt-3">Mingo‘rik</h3>
            </div>
          </div>
        </div>

      </article>


      <div className="flex flex-col justify-between w-81.5 h-169.75 ml-270.5 -mt-114">
        <Banner1/>
        <Banner2/>
      </div>

      <div className="ml-8 -mt-50 rounded-xl mb-16">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0790016934439!2d69.20555942685978!3d41.285036399841005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta'lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1766638904829!5m2!1sru!2s" 
          className="w-256.5 h-75 border-none rounded-xl"
          allowFullScreen 
          loading="lazy">
        </iframe>
      </div>

    </main>
  )
}