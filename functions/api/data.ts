// export async function onRequest(context: EventPluginContext<any, any, any, any>) {
//   const {
//     request, // same as existing Worker API
//     env, // same as existing Worker API
//     params, // if filename includes [id] or [[path]]
//     waitUntil, // same as ctx.waitUntil in existing Worker API
//     next, // used for middleware or to fetch assets
//     data, // arbitrary space for passing data between middlewares
//   } = context;

//   const data1 = {
//     hello: 'My First Function',
//     token: true,
//     verified: true,
//   };
//   const json = JSON.stringify(data1, null, 2);

//   return new Response('HELLO');
// }


import { PrismaClient } from '@prisma/client/edge';

export async function onRequest(
  context: EventPluginContext<any, any, any, any>
) {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;
  // const prisma = new PrismaClient()
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });

  // // waitUntil method is used for sending logs, after response is sent
  // waitUntil(
  //   prisma.user.create({
  //     data: {
  //       name: 'Alex Main',
  //       email: 'test@gmail.com,',
  //     },
  //   })
  // );
  const data1 = {
    hello: 'My First Function',
    token: true,
    verified: true,
    bla: env
  };
  const json = JSON.stringify(data1, null, 2);

  return new Response(json);
}
