import Header from "@/components/Header";
import "./globals.css";

import LeftSideBar from "@/components/LeftSideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="">
          <div className="flex">
            <div className="w-[25%] h-[100vh] ">
              <LeftSideBar />
            </div>

            <div className="w-[75%] h-[100vh] ">
              {children}
              </div>
          </div>
        </main>
      </body>
    </html>
  );
}
