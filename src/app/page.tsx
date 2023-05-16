import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
     
<div className="post flex  p-4 bg-green-500 w-[600px] gap-2 rounded-md">
  <div className="flex flex-col p-2 bg-slate-300 rounded-md justify-between">
    <button>+</button>
    <p>12</p>
    <button>-</button>

  </div>
  <div className="flex flex-col gap-3">
    <div className=" flex justify-between">
      <div className="flex gap-2">
        <p>Avtar</p>
        <p>amyrobson</p>
        <p>1month</p>
      </div>

      <div className="flex">
        <p>symbole</p>
       <button>Reply</button>
      </div>
    </div>
    <p className="">Impressive! Thought it seems the drag feature could be improved. But overall it look incredible. You've nailed the design and responsiveness at various breakpoints works really well.</p>
  </div>
</div>
<div className="post flex  p-4 bg-green-500 w-[600px] gap-2 rounded-md">
  <p className="">AVTAR</p>
  <input type="text" />
  <button className="">Reply</button>
</div>


</main>
  )
}
