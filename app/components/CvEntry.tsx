import { ReactNode } from "react";

type CvEntryProps ={
    title : string;
    employer?: string;
    children? : ReactNode;
    date ?:string;
    subtitle ?: string;
    description: string;
};

export default function CvEntry({
  title, employer, children, date, subtitle, description}: CvEntryProps){
  return (
    <div>
        <div className="p-6 border border-purple-300 rounded-2xl shadow-sm mx-4 my-8">
            <div className="flex items-center justify-between"></div>
            <h3 className="text-xl font-bold text-purple-300">{title}</h3>

            {date && (
            <h4 className="mb-2 text-purple-900">{date}</h4>)}

             {description && (
            <p className="text-sm   text-purple-50">
              {description}</p>)}
        </div>
        
    </div>

  )
}