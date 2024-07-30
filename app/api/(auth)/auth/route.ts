import { db } from "@/lib/db"
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';


function generateRandomIntegers(n: number): string {
    let conmeo = "" 
    for (let i = 0; i < n; i++) {
      const randomInt = Math.floor(Math.random() * 10);
      conmeo += randomInt
    }
    return conmeo;
}

export async function POST(req: NextRequest) {
    const res = await req.json()
    try {
        const OTPcheck = generateRandomIntegers(6)
        var email = res?.emailinput
        const checkemail = await db.user.findUnique({
            where: { email },
          });
        
        if(checkemail){
            return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
        }
          try {
            const transporter = nodemailer.createTransport({
                service:"gmail",
                host:"smtp.gmail.com",
                port:587,
                secure:false,
                auth:{
                  user: process.env.NEXT_PUBLIC_EMAIL_USER,
                  pass: process.env.NEXT_PUBLIC_EMAIL_PASS
                }
              });

              const mailOption = {
                from:{
                  name:"Xác thực email",
                  address:"thainguyen240303@gmail.com"
                },
                to:[`${email}`],
                subject:"Fruitbook",
                text:"Xác thực email đăng ký của Fruitbook",
                html:`          <h1>Xác thực email đăng ký của Fruitbook</h1>
                    <p>xin chào ${email} chúng tôi gửi bạn mã xác thực email của bạn: <h2>${OTPcheck}</h2></p>
                `
              }
            const conmeo = await transporter.sendMail(mailOption)
          } catch (error) {
            return NextResponse.json({ message: 'loi gui mail.' }, { status: 400 });
          }
          await db.user.create({
            data:{
               email:`${email}`,
               OTP:`${OTPcheck}`
            }
          });
          return NextResponse.json({ message: 'thành công' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'loi cục bộ.' }, { status: 400 });
    }
    
  }
  