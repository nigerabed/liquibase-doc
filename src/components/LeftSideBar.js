import Image from "next/image";
import arrowDown from "../assets/sort-down-solid.svg";
import Link from "next/link";
import { pageInfo } from "../assets/data";

export default function LeftSideBar() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex-col gap-2 lg:flex bg-gray-500 p-[2em] divide-y divide-slate-200">
        {pageInfo.map((pi) => (
          <div >
            
            <div className="flex justify-between">
              <Link href={pi.id}>
                <p className="text-white text-[1.2em]">{pi.linkTitle}</p>
              </Link>
              <Image src={arrowDown} height={15} width={15} alt="arrowDown" />
            </div>

             {/* {pi.Children ? <div className="p-2.5">
                      {pi.Children.map(child=>
                        <Link href={child.id}>
                            <p className="text-white text-[1.2em] p-2.5"> 
                                {child.linkTitle}
                            </p>
                        </Link>)}
                 </div>: ""}  */}
          </div>
        ))}
      </div>
    </>
  );
}
