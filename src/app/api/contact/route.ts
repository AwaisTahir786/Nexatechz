import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
    if (req.method === "POST") {
        try {
            const {
                first_name,
                last_name,
                email,
                company_name,
                help,
                company_size,
                info } = await req.json();




            // nodemailer data 

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // Use `true` for port 465, `false` for all other ports
                auth: {
                    user: "tahirawais111@gmail.com",
                    pass: "aknf yreu irwg splk",
                },
            });

            
            const mailoptions = {
                from: email, // sender address
                to: "tahirawais111@gmail.com", // list of receivers
                subject: "Contact Form Submission", // Subject line
                html: `<h1>Contact Information<h1/>
                <p>First name: ${first_name} <p/>
                <p>Last name: ${last_name} <p/>
                <p>Work email: ${email} <p/>
                <p>Company Name: ${company_name}</p>
                <p>Company Size: ${company_size}</p>
                <p>Help: ${help}</p>
            
                <p>Info: ${info}</p>

                
                `
            };

            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>



            await transporter.sendMail(mailoptions);
            return NextResponse.json("Email has been sent")




        }
        catch {
            return NextResponse.json("Email has not been sent")
        }
    }
    else {
        return NextResponse.json("Method Not Allowed")
    }


}
