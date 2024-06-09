# JWT authentication for Node.js + TypeScript Backend 
## Routes:

#### /api/v1/user/register  - POST
Creates a new user. It takes name, email and password in the request body and stores the name, email and *hashed password* in the Couchbase database.

#### /api/v1/user/login  - POST
Logs in the registered user and sends a new signed JWT. This JWT can be stored in local storage, etc.

#### /api/v1/protected  - GET
Simple protected route, just for testing the JWT. You will need a valid JWT to access this route. Put the JWT in the header like: Authorization: 'Bearer [JWT]'

## How to run the project:

1. Create the .env file with project secrets like:
    - JWT_SECRET: Encryption key to sign your JWTs. You can get one from: https://www.allkeysgenerator.com
    - JWT_LIFETIME: How much time a particular JWT will be valid for. Example: 30d - for 30 days.
    - CB_URI: Sign up for a free Couchbase account, if you don't have any. Create a new Cluster and connect it using this URI. Refer: https://docs.couchbase.com/nodejs-sdk/current/howtos/managing-connections.html
    - PORT: This is optional. By default the port will be 3000.

2. Go inside the project and run the following commands:
```bash
npm install
npm start
```

3. To compile TypeScript code to JavaScript and see the changes in real time, in a different terminal instance, run:
```bash
tsc -w
```