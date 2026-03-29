import { LeftSide } from "./leftSide/leftSide";
import { NavBar } from "./navbar/navbar";
import { RightSide } from "./rightSide/rightSide";

export default function Header (){
    return(
        <header className="flex justify-between items-center h-20 bg-(--dark) mt-5 mx-2 rounded-2xl p-5 border border-(--stroke)">
            <LeftSide/>
            <NavBar/>
            <RightSide/>
        </header>
    )

}