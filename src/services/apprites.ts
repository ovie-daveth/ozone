import { Client, Account, ID, Databases } from 'appwrite';

const client = new Client();
const id = process.env.NEXT_PUBLIC_APPRITE_PROJECT_ID;
const url = process.env.NEXT_PUBLIC_BASEURL

client
    .setEndpoint(url??"")
    .setProject(id?? "");

const account = new Account(client);
const databases = new Databases(client)

const collections = [
    {
        name: "tag",
        id: process.env.NEXT_PUBLIC_COLLECTION_ID,
        dbId: process.env.NEXT_PUBLIC_DATABASE_ID,
    },
    {
        name: "snippet",
        id: process.env.NEXT_PUBLIC_SNIPPET_ID,
        dbId: process.env.NEXT_PUBLIC_DATABASE_ID,
    }
]

export {account, databases, ID, collections}
