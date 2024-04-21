import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ params }) => {
  //check db for existing result by query
  // if there is one, return it
  // if there is no, call chatgpt, write res to db and return
  return new Response(
    JSON.stringify({
      data: params.searchQuery,
    }),
  )
}
