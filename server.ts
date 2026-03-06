import { serve } from "https://deno.land/std/http/server.ts";

const port = 8000;

serve((req) => {
  return new Response("Hello REST API");
}, { port });

console.log("Server läuft auf http://localhost:8000");