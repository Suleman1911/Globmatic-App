import {ReactNode} from "react";
export default function ConferenceLayout({children}: {children: ReactNode}){
    return (<>
    <header className="w-full py-[50px] px-0 bg-[#212121] text-[#ffffff] text-center justify-center">
    <h1>Globomantic Manically Taking Tech To The Globe</h1>
    </header>
    <section>{children}</section>
    </>)
}
