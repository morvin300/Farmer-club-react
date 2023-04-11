
import {getSession,signOut} from "next-auth/react"
import { NextPageContext } from "next";
import useCurrentUser from '@/hooks/useCurrentUser'

export async function getServerSideProps(context: NextPageContext) {
  const session =await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent:false,
      }
    }
  }
  return {
    props:{}
  }
}  

export default function Home() {
  const {data : user} = useCurrentUser();
  return (
    <>
     <h1 className="text-2xl text-green-500 text-center self-center">Development under progress </h1>
     <p className="text-white">Logged in as : {user?.email}</p>
     <button className="absolute top-0 right-0 mt-2 mr-2 px-4 py-1 text-white bg-black-500 hover:bg-red-600 rounded-md" onClick={() => signOut()}> Logout</button>
    </>
  )
}
