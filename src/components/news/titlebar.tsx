import Image from 'next/image';

export const TitleBar = () => {
  return (
    <section className="flex justify-between items-center px-6 mt-5 w-264">
      <h1 className="text-[32px] text-(--white) font-bold">Yangiliklar</h1>
      <div className='flex items-center w-81.5 h-13 px-4 bg-(--dark2) border border-[#232627] rounded-lg'>
        <div className='flex gap-1.5 items-center'>
          <Image src={'/icons/search.svg'} alt={'search icon'} width={24} height={24} className='w-6 h-6'/>
          <input type="text" className='outline-0 h-full font-medium text-[16px]'/>
        </div>
      </div>
    </section>
  );
};