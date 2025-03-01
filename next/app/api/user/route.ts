import { NextRequest } from "next/server"

export function GET(){
    return Response.json({
        email:"sarfraz@123.com",
        name:"Sarfraz Alam"
    })
}

export async function POST(req:NextRequest){
    const body = await req.json()

    console.log(body)
    console.log(req.headers.get("authorization"))
    console.log(req.nextUrl.searchParams.get("name"))

    return Response.json({
        email:"sarfraz@123.com",
        name:"Sarfraz Alam"
    })
}