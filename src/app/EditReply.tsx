import Image from "next/image";
import amyrobsonAvtar from "@/images/avatars/image-amyrobson.png";
import juliusomoAvtar from "@/images/avatars/image-juliusomo.png";
import maxblagun from "@/images/avatars/image-maxblagun.png";
import ramsesmiron from "@/images/avatars/image-ramsesmiron.png";

import reply from "@/images/icon-reply.svg";
import deletesIcon from "@/images/icon-delete.svg";
import editIcon from "@/images/icon-edit.svg";
import minusIcon from "@/images/icon-minus.svg";
import pluseIcon from "@/images/icon-plus.svg";
import Post from "./Post";
import Reply from "./Reply";

type EditReplyType = {
    avtar:string,
    like: number,

}

export default function EditReply(props: EditReplyType) {
  return (
    <section className="flex  text-[hsl(211,10%,45%)]  w-[600px] justify-end">
    <div className="flex  bg-[hsl(0,0%,100%)]  p-4 gap-4 w-[550px] rounded-lg">
      <div className="flex flex-col p-2  bg-[hsl(223,19%,93%)] rounded-md gap-2 h-20">
        <button className="flex items-center justify-center fill-[hsl(239,57%,85%)] hover:fill-[hsl(238,40%,52%)]">
          <Image src={pluseIcon} alt={""} />
        </button>
        <p className="text-[hsl(238,40%,52%)]">{props.like}</p>
        <button className="flex items-center justify-center text-[hsl(239,57%,85%)] hover:text-[hsl(238,40%,52%)]">
          <Image src={minusIcon} alt={""} />
        </button>
      </div>
      <div className="flex flex-col  bg-[hsl(0,0%,100%)]  w-[500px] gap-2 rounded-md   ">
        <div className="flex  items-center justify-between">
          <div className="flex gap-1 text-sm items-center">
            {" "}
            <img className="w-6 h-6" src={props.avtar} alt={""} />
            <p className="text-[hsl(212,24%,26%)]">Name</p>
            <p className="bg-[hsl(238,40%,52%)] rounded-sm px-[8px] py-[1px] text-center text-[hsl(0,0%,100%)]">
              You
            </p>
            <p>1 month</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <Image className="w-4 h-4" src={deletesIcon} alt={""} />
              <p className="text-[hsl(358,79%,66%)] hover:text-[hsl(357,100%,86%)]">
                Delet
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image className="w-4 h-4" src={editIcon} alt={""} />
              <p className="text-[hsl(238,40%,52%)] hover:text-[hsl(239,57%,85%)] ">
                Edit
              </p>
            </div>
          </div>
        </div>
        <textarea className="resize-y rounded-md w-full border"></textarea>
        <div className="flex justify-end">
          <button className="bg-[hsl(238,40%,52%)] hover:bg-[hsl(239,57%,85%)] p-2 font-bold text-white rounded-lg  w-20 text-center ">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}