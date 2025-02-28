import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// async function insertUser(email: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             email,
//             firstName,
//             lastName,
//             password
//         },
//         select:{
//             id:true,
//             password:true
//         }
//     })

//     console.log(res)
// }

// insertUser("sarfraz@gmail.com", "Muskan", "Jaan", "sarmusr")

interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })

    console.log(res)
}

updateUser('sarfraz@gmail.com', { firstName: 'Sher', lastName: "Qadri" })