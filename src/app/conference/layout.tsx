import {ReactNode} from "react";
export default function ConferenceLayout({children}: {children: ReactNode}){
    return (<>
    <section>{children}</section>
    </>)
}
