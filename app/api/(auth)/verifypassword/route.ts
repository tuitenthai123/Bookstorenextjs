import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json()
    await db.user.update({
        where:{
            email:res?.emailtemp
        },
        data:{
            password:res?.passguidi
        }
    })
    return NextResponse.json({ message: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'loi' }, { status: 400 });
  }
}
