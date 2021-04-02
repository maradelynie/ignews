import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
     const prismic = Prismic.client(
          process.env.PRIMSIC_ENDPOINT,
          {
               req,
               accessToken: process.env.PRIMSIC_ACCESS_TOKEN
          }
     )
     return prismic
}