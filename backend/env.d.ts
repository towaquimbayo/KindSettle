declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string;
            CB_URI: string;
            CB_USERNAME: string;
            CB_PASSWORD: string;
            CB_BUCKET: string;
            JWT_SECRET: string;
            JWT_LIFETIME: string;
            CLIENT_DEV_URL: string;
            CLIENT_PROD_URL: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }