import data from "../data.json";
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
import EditReply from "./EditReply";
import StaticReply from "./StaticReply";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24 bg-[hsl(223,19%,93%)] font-Rubik">
      {/* {data.comments.map((comment) => (
       
      ))} */}

      {data.comments.map((comment) => (
        <>
          <Post
            PostAvtar={comment.user.image.png}
            userName={comment.user.username}
            time={comment.createdAt}
            message={comment.content}
            like={comment.score}
          />
          <div className="flex gap-4   flex-col ">
            {comment.replies.map((reply) => (
              <StaticReply
                Replyavtar={reply.user.image.png}
                like={reply.score}
                replyingTo={reply.replyingTo}
                replyText={reply.content}
                userName={reply.user.username}
                time={reply.createdAt}
                message={reply.content}
              />
            ))}
          </div>
        </>
      ))}
      <Reply avtar={data.currentUser.image.png} />
      {/* <OthersReplyType
        avtar={maxblagun}
        userName={"maxblagun"}
        time={"2 month"}
        message={
          "ut overall it look incredible. You've nailed the design and responsiveness at various breakpoints works really well."
        }
        like={0}
      /> */}
      {/* <EditReply avtar={data.currentUser.image.png} like={0}/> */}
    </main>
  );
}
