"use client"

interface Props {
    activeTab: 'phone' | 'email';
}

export default function AuthForm ({ activeTab }: Props) {
    return(
        <form className="w-104.75 h-41.5 ml-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Ism-sharifingiz</label>
            <input
              type="text"
              placeholder="Ism-sharifingizni kiriting"
              className="w-104.75 h-11 bg-[#13181C] border border-[#36393B] rounded-lg p-3 outline-none focus:border-blue-500 block"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              {activeTab === 'phone' ? 'Telefon raqam' : 'E-mail manzili'}
            </label>
            
            {activeTab === 'phone' ? (
              <div className="flex">
                <span className="flex items-center justify-center w-16.5 bg-[#1A1D1F] border border-[#36393B] border-r-0 rounded-l-lg  text-white">
                  +998
                </span>
                <input
                  type="tel" 
                  maxLength={9}
                  placeholder="-- --- -- --"
                  className="w-88.25 h-11 bg-[#13181C] border border-[#36393B] rounded-r-lg p-3 outline-none focus:border-blue-500"
                />
              </div>
            ) : (
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-104.75 h-11 bg-[#13181C] border border-[#36393B] rounded-lg p-3 outline-none focus:border-blue-500"
              />
            )}
          </div>
        </form>
    )
}