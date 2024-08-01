import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json()
    const dangnhap = await db.user.findUnique({
        where:{
            email:res?.emailinput,
            password:res?.password
        },
    })
    if(dangnhap)
        return NextResponse.json({ message: true }, { status: 200 });
    else
        return NextResponse.json({ message: false }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'loi' }, { status: 400 });
  }
}
