"use client"
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.refresh()}>
      Click here to reload
      <img src="https://api.dicebear.com/9.x/identicon/svg?seed=774011" alt="" />
    </button>
  )
}