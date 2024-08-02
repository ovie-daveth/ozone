import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.NEXT_PUBLIC_BASEURL)
    .setProject(import.meta.env.NEXT_PUBLIC_APPRITE_PROJECT_ID);

const account = new Account(client);

const collections = [
    {
        name: "",
        id: "",
        dbId: "",
    }
]

export {account, client, ID, collections}
