import { PrismaClient } from '@prisma/client/edge';

export async function onRequest(
  context: EventPluginContext<any, any, any, any>
) {
  const { env } = context;
  
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });

  const user = await prisma.user.create({
    data: {
      name: 'Prod',
      email: 'test@gmail.com,',
    },
  })

  console.log(user)

  const data = {
    hello: 'My First Function',
    token: true,
    verified: true,
    env,
    user
  };
  const json = JSON.stringify(data, null, 2);

  return new Response(json);
}
