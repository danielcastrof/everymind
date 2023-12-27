/* eslint-disable prettier/prettier */
import {produtos} from './produtos';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    for(const item of produtos){
        await prisma.produto.create({
            data: {...item},
        })
    }
    }

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})