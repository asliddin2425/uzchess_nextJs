"use client";
import { useState } from 'react';
import AuthTabs from "@/components/shared/auth/auth-tabs"
import AuthForm from "@/components/shared/auth/auth-form"
import Image from "next/image"
import SubmitButton from '@/components/shared/auth/submit-button';
import Terms from '@/components/shared/auth/terms';
import Divider from '@/components/shared/auth/divider';
import AuthButton from '@/components/shared/auth/auth-button';

interface Props {
  onClose?: () => void;
}
export default function SignUp({onClose}: Props) {
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('phone');

  return(
    <main  onClick={onClose} className="fixed w-screen h-screen bg-[#0C0E0F]/94 top-0 left-0">
      <div onClick={(e) => e.stopPropagation()} className=''>
       <article  className="flex flex-col items-center overflow-hidden gap-18 ">
            <Image src="/icons/logo.svg" alt="icon" width={169} height={42} className="w-42.25 h-10.5"/>
            <div className='flex gap-3'>
              <div className="flex flex-col w-227.5 h-149.25 bg-[#1A1D1F] rounded-xl  overflow-hidden ">
                  <div className="flex flex-col w-116.75 h-34.5  border-b border-[#252A2E] mb-8.25">
                      <h1 className="font-bold text-[20px] text-white ml-6 mt-6.5 mb-4.75">Ro‘yxatdan o‘tish</h1>
                      <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                  </div>
                  <AuthForm activeTab={activeTab} />
                  <div className='w-104.75 h-9 ml-6 mt-5.75 mb-9.25'><Terms/></div>
                  <SubmitButton/>
                  <Divider/>
                  <div className='w-104.75 h-11 mt-6.5'><AuthButton/></div>   
                  <div className='owelflow'></div>
                  <Image src={"/images/auth-image.png"} alt='image' width={443} height={597} className='ml-116.75 -mt-141.5' />
              </div>
              <button className=' flex items-center justify-center w-10 h-10 bg-[#1A1D1F] rounded-lg p-1.75 cursor-pointer active:scale-[0.94]' onClick={onClose} >X</button>
            </div> 
       </article>
      </div>


    </main>
  )
}