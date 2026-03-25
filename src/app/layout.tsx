import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";


export default function RootLayout ({children}: Readonly <{children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={"flex flex-col justify-between antialiased"}>
        <Header/>
        {children}
        <Footer/>
      </body>


    </html>
  )
}
