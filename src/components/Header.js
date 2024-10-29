import search from "../assets/search.svg"
import Image from "next/image"

export default function Header(){
    return(
    
        <header>
            <div className="bg-blue-700 h-[7em] flex justify-between items-center p-[2em]">
                <h1 className="ml-[1em] text-white bold text-7xl">Liquibase</h1>
                <div className="flex justify-center align-center">
                    <input type="text" className="h-[2em] w-[15em]" />
                    <button className="bg-white h-[2em] w-[4em] relative ml-[.2em]">
                        <Image src={search} height={15} width={15} alt="search" className="absolute bottom-[.5em] left-[1.5em]"/>
                    </button>
                    
                </div>

            </div>
        </header>
        
    )
}