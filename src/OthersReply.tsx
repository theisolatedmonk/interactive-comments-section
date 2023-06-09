import Image from "next/image";
import minusIcon from "@/images/icon-minus.svg";
import pluseIcon from "@/images/icon-plus.svg";
import React from 'react'
import reply from "@/images/icon-reply.svg";

type OthersReplyType = {
    avtar:any,
    userName:string,
    time:string,
    message:string,
    like:number
}

 
    
export default function OthersReplyType(props: OthersReplyType) {
    return (
      <div className="post flex  p-4 bg-[hsl(0,0%,100%)] w-[600px] gap-4 rounded-md">
        <div className="flex flex-col p-2  bg-[hsl(223,19%,93%)] rounded-md gap-2 h-20">
            <button className="flex items-center justify-center fill-[hsl(239,57%,85%)] hover:fill-[hsl(238,40%,52%)]"><Image src={pluseIcon} alt={""}/></button>
            <p className="text-[hsl(238,40%,52%)]">{props.like}</p>
            <button className="flex items-center justify-center text-[hsl(239,57%,85%)] hover:text-[hsl(238,40%,52%)]"><Image src={minusIcon} alt={""}/></button>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image className="w-6 h-6" src={props.avtar} alt={""} />
                <p className="text-[hsl(212,24%,26%)]">{props.userName}</p>
                <p>{props.time}</p>
              </div>
  
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" src={reply} alt={""} />
                <button className="font-bold text-[hsl(238,40%,52%)]">Reply</button>
              </div>
            </div>
            <p className="text-[hsl(211,10%,45%)]">
              {props.message}
            </p>
          </div>
        </div>
    )
  }