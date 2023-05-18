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
import OthersReplyType from "@/OthersReply";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24 bg-[hsl(223,19%,93%)]">
      <Post
        avtar={amyrobsonAvtar}
        userName={"amyrobson"}
        time={"1 month"}
        message={
          " Impressive! Thought it seems the drag feature could be improved. But overall it look incredible. You've nailed the design and responsiveness at various breakpoints works really well."
        }
        like={0}
      />
       <Post
        avtar={amyrobsonAvtar}
        userName={"amyrobson"}
        time={"1 month"}
        message={
          " Woah, your project looks awesome! How long have you been coding for? I'm still new. but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
        }
        like={0}
      />
      <Reply avtar={juliusomoAvtar}/>
    
      <OthersReplyType avtar={maxblagun} userName={"maxblagun"} time={"2 month"} message={"ut overall it look incredible. You've nailed the design and responsiveness at various breakpoints works really well."} like={0}/>
    </main>
  );
}
