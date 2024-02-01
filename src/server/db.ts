import {PrismaClient} from "@prisma/client/extension";
import * as process from "process";

const prisma = new PrismaClient()

async function main() {

    // init user
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@in-the-wonderland.com',
            posts: {
                create: {title: 'Hello World'},
            },
            profile: {
                create: {bio: 'I like turtles'},
            },
        },
    })


}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
