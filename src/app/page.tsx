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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24 bg-[hsl(223,19%,93%)]">
      <div className="post flex  p-4 bg-[hsl(0,0%,100%)] w-[600px] gap-4 rounded-md">
      <div className="flex flex-col p-2  bg-[hsl(223,19%,93%)] rounded-md gap-2 h-20">
          <button className="flex items-center justify-center fill-[hsl(239,57%,85%)] hover:fill-[hsl(238,40%,52%)]"><Image src={pluseIcon} alt={""}/></button>
          <p className="text-[hsl(238,40%,52%)]">12</p>
          <button className="flex items-center justify-center text-[hsl(239,57%,85%)] hover:text-[hsl(238,40%,52%)]"><Image src={minusIcon} alt={""}/></button>
        </div>
        <div className="flex flex-col gap-3">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image className="w-6 h-6" src={amyrobsonAvtar} alt={""} />
              <p className="text-[hsl(212,24%,26%)]">amyrobson</p>
              <p>1month</p>
            </div>

            <div className="flex items-center gap-2">
              <Image className="w-4 h-4" src={reply} alt={""} />
              <button className="font-bold text-[hsl(238,40%,52%)]">Reply</button>
            </div>
          </div>
          <p className="text-[hsl(211,10%,45%)]">
            Impressive! Thought it seems the drag feature could be improved. But
            overall it look incredible. You've nailed the design and
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
        <div className="
        post flex   p-4 bg-[hsl(0,0%,100%)] w-[600px] gap-2 rounded-md justify-between  items-start 
        ">
          <Image className="w-6 h-6" src={juliusomoAvtar} alt={""} />
          <textarea className="resize-y rounded-md w-full text-[hsl(211,10%,45%)] border "></textarea>
          <button className="bg-[hsl(238,40%,52%)] hover:bg-[hsl(239,57%,85%)] px-4 py-2 font-bold text-[hsl(0,0%,100%)] rounded-lg">
            Reply
          </button>
        </div>
<section className="flex  text-[hsl(211,10%,45%)]  w-[600px] justify-end">
<div className="flex  bg-[hsl(0,0%,100%)]  p-4 gap-4 w-[550px] rounded-lg">
<div className="flex flex-col p-2  bg-[hsl(223,19%,93%)] rounded-md gap-2 h-20">
          <button className="flex items-center justify-center fill-[hsl(239,57%,85%)] hover:fill-[hsl(238,40%,52%)]"><Image src={pluseIcon} alt={""}/></button>
          <p className="text-[hsl(238,40%,52%)]">12</p>
          <button className="flex items-center justify-center text-[hsl(239,57%,85%)] hover:text-[hsl(238,40%,52%)]"><Image src={minusIcon} alt={""}/></button>
        </div>
<div className="flex flex-col  bg-[hsl(0,0%,100%)]  w-[500px] gap-2 rounded-md   ">
       <div className="flex  items-center justify-between">
      <div className="flex gap-1 text-sm items-center"> <Image className="w-6 h-6" src={juliusomoAvtar} alt={""} />
       <p className="text-[hsl(212,24%,26%)]">Name</p>
       <p className="bg-[hsl(238,40%,52%)] rounded-sm px-[8px] py-[1px] text-center text-[hsl(0,0%,100%)]">You</p>
       <p>1 month</p></div>
      <div className="flex gap-2">
      <div className="flex gap-1 items-center"><Image className="w-4 h-4" src={deletesIcon} alt={""} />
      <p className="text-[hsl(358,79%,66%)] hover:text-[hsl(357,100%,86%)]">Delet</p></div>
      <div className="flex gap-1 items-center"><Image className="w-4 h-4" src={editIcon} alt={""} />
      <p className="text-[hsl(238,40%,52%)] hover:text-[hsl(239,57%,85%)] ">Edit</p></div>
     
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
     
    </main>
  );
}
