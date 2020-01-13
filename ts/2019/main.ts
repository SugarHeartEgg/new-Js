import { serve } from "https://deno.land/std@v0.3.2/http/server.ts";
// import { uuid } from "https://deno.land/x/uuid/mod.ts";

async function main() {
  // const Myuuid = uuid();
  const body = new TextEncoder().encode("Hello Deno\n");
  for await (const req of serve(":8000")) {
    req.respond({ body });
  }
}
main();