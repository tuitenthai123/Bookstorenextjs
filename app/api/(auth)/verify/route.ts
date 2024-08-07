import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


function ngaunhienkitu(length:number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'user-';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


export async function POST(req: NextRequest) {
  try {
    const res = await req.json()
    const email = res?.email
    const opt = res?.OTP
    const fullname = ngaunhienkitu(8)
    const kichhoat = await db.user.findUnique({
      where:{
        email:email,
        OTP:opt
      }
    })

    if(kichhoat){
      await db.user.update({
        where:{email:email},
        data:{
          fullName:fullname,
          verified:true
        }
      })
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }else{
      return NextResponse.json({ message: "sai mã OTP" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'loi' }, { status: 400 });
  }
}
