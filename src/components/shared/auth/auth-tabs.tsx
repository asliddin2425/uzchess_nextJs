"use client"

interface Props {
    activeTab: 'phone' | 'email';
    setActiveTab: (tab: 'phone' | 'email') => void;
}

export default function AuthTabs ({ activeTab, setActiveTab }: Props) {
    return(
        <main className="flex flex-row justify-between items-center w-104.75 h-10.75 bg-[#13181C] rounded-lg ml-6">
            <button
                type="button"
                onClick={() => setActiveTab('phone')}
                className={`flex-1 w-50.25 h-8.75 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'phone' ? 'bg-[#323639] shadow-md' : 'text-white'}`}>
                Telefon raqam orqali
            </button>

            <button
                type="button"
                onClick={() => setActiveTab('email')}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'email' ? 'bg-[#323639] shadow-md' : 'text-gray-400'}`}>
                E-mail orqali
            </button>
        </main>
    )
}
