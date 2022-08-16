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

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });

  // waitUntil method is used for sending logs, after response is sent
  waitUntil(
    prisma.user.create({
      data: {
        name: 'Alex Main',
        email: 'test@gmail.com,',
      },
    })
  );

  console.log(env);
  return new Response(`Hi`);
}

// addEventListener('fetch', (event) => {
//   event.respondWith(handleEvent(event))
// })

// async function handleEvent(event: FetchEvent): Promise<Response> {
//   const { request } = event

// // waitUntil method is used for sending logs, after response is sent
// event.waitUntil(
//   prisma.log.create({
//     data: {
//       level: 'Info',
//       message: `${request.method} ${request.url}`,
//       meta: {
//         headers: JSON.stringify(request.headers),
//       },
//     },
//   })
// )

//   return new Response(`request method: ${request.method}!`)
// }
