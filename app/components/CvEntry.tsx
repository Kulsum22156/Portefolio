import { ReactNode } from "react";

type CvEntry ={
    title : string
    employer : string
    children : ReactNode
}

export default function CvEntry(props : CvEntry) {
  return (
    <div>
        <div className="p-4 border border-fuchsia-200 rounded-xl shadow-sm mx-4 my-8">
            <div className="flew items-center justify-between"></div>
            <div>{props.title}</div>
            <h3 className="text-xl font-bold text-amber-200">Etudiante</h3>
            <h4 className="mb.2 italic text-amber-700">ECAM</h4>
        </div>
        (hey)
    </div>

  )
}