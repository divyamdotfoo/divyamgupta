export default function Page() {
  return (
    <div className=" p-10">
      <h1 className=" text-5xl font-bold pb-10">Divyam gupta</h1>
      <h2 className=" text-2xl font-semibold pb-5">
        Skills: Typescript, React, Nextjs, Nodejs, Express
      </h2>
      <div className=" flex items-start gap-6">
        <p className=" text-2xl font-semibold">Projects</p>
        <div className=" flex flex-col items-start gap-2 text-xl">
          <p>ipcc.ai</p>
          <p>todayilearned.xyz</p>
          <p>prismflow.vercel.app</p>
          <p>codesnaps.vercel.app</p>
          <p>play-with-javascript.vercel.app</p>
          <p>vibesnap.vercel.app</p>
        </div>
      </div>
    </div>
  );
}
