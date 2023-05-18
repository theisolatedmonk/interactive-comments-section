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

type ReplyType = {
avtar:any,

}

export default function Reply(props: ReplyType) {
  return (
    <div
    className="
    post flex   p-4 bg-[hsl(0,0%,100%)] w-[600px] gap-2 rounded-md justify-between  items-start 
    "
  >
    <Image className="w-6 h-6" src={props.avtar} alt={""} />
    <textarea className="resize-y rounded-md w-full text-[hsl(211,10%,45%)] border "></textarea>
    <button className="bg-[hsl(238,40%,52%)] hover:bg-[hsl(239,57%,85%)] px-4 py-2 font-bold text-[hsl(0,0%,100%)] rounded-lg">
      Reply
    </button>
  </div>
  )
}