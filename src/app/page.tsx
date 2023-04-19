import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session:any = await getServerSession(handler);
  const user = session?.user;

  if(!user) {
    redirect('/auth/signin');
  }

  return (
    <section>
      <FollowingBar/>
      <PostList/>
      <SideBar user={user}/>
    </section>
  )
}
