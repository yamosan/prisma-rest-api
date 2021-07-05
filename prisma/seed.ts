import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const taro = await prisma.user.upsert({
    where: { email: "taro@example.com" },
    update: {},
    create: {
      email: "taro@example.com",
      name: "taro",
    },
  });

  const ziro = await prisma.user.upsert({
    where: { email: "ziro@example.com" },
    update: {},
    create: {
      email: "ziro@example.com",
      name: "ziro",
    },
  });
  console.log({ taro, ziro });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });