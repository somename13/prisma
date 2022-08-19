import { PrismaClient } from '@prisma/client/edge';

export async function onRequest(
  context: EventPluginContext<any, any, any, any>
) {
  const { env } = context;

  console.log('db url', env.DATABASE_URL);
  
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });

  // waitUntil(
  //   prisma.user.create({
  //     data: {
  //       name: 'Alex Main',
  //       email: 'test@gmail.com,',
  //     },
  //   })
  // );

  return new Response('Success');
}
