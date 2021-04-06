# ig.news

Thats a result of the 3th part of a advenced frontEnd lesson for serverless projects, using Next.Js, scss modules, SSR and SSG, FaunaDB, Stripe Payments, SingIn with GitHub and next-auth and Prismic CMS.

### Prerequisites

You will need to have NodeJs to install this project;

[Get Node Here](https://nodejs.org/en/)

For to configure the project you will need accounts in;

Prismic;
[Create your Prismic account](https://prismic.io/)

FaunaDb;
[Create your FaunaDB account](https://fauna.com/)

Stripe Payments;
[Create your Stripe account](https://stripe.com/)

### Installing

For to run in on your enviroment you will need to configure somethings;

1 - First clone this project, and with a terminal openned at the project folder run:

```
$ yarn or $ npm install
```

2 - Now you will need to set faunaDB indexes:

```

subscription_by_id (terms: data.id)
subscription_by_status (terms: data.status)
subscription_by_user_ref (terms: data.userId)
user_by_email (terms: data.email)
user_by_stripe_customer_id (terms: data.stripe_costumer_id)

```

3 - Configure your Prismic CMS account:

```
At settings > security & API > Repository security;
Change the API access to private API.

```

4 - Then create a .env.local file on the root folder, there you will need to set:

```
STRIPE_API_KEY=<your api key from stripe>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your public key from stripe>
STRIPE_SUCCESS_URL=<your success from stripe>
STRIPE_CANCEL_URL=<your fail url from stripe>
STRIPE_WEBHOOK_SECRET=<your webhook secret from stripe>

GITHUB_CLIENT_ID=<your id from github>
GITHUB_CLIENT_SECRET=<your secret token from github>

FAUNADB_KEY=<your key from faunaDB>

PRIMSIC_ACCESS_TOKEN=<your secret token from prisma>
PRIMSIC_ENDPOINT=<your api endpoint from prisma>
```

All done? Now run:

```
$ yarn dev or $ npm run dev
```

The project will be started at localhost:3000

## Made With

- next.js
- sass modules
- Prismic
- typescript
- FaunaDB
- next-auth
- stripe API

- SSR
- SSG

## Project owner

**Rocketseat**

## Author

**Mara Oliveira**
