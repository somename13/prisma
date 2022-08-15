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

  const payload = {
    hello: 'My First Function',
    token: true,
    verified: true,
  };
  const json = JSON.stringify(payload, null, 2);

  return new Response(json);
}
