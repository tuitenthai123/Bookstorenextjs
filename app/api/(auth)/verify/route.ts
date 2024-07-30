import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json()
    const email = res?.email
    const opt = res?.OTP
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
