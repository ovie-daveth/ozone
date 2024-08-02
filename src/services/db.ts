import { collections, databases, ID } from "./apprites";

interface Collection {
  name: string;
  id?: string;
  dbId?: string;
}


const db: { [key: string]: any } = {};

collections.forEach((collection: Collection) => {
  db[collection.name] = {
    create: async (payload: any, id: string = ID.unique()) => {
      return await databases.createDocument(
        collection.dbId,
        collection.id,
        id,
        payload
      );
    },
    update: async (id: string, payload: any) => {
      return await databases.updateDocument(
        collection.dbId,
        collection.id,
        id,
        payload
      );
    },
    getAll: async () => {
      return await databases.listDocuments(
        collection.dbId,
        collection.id
      );
    },
    getOne: async (id: string) => {
      return await databases.getDocument(
        collection.dbId,
        collection.id,
        id
      );
    },
    deleteOne: async (id: string) => {
      return await databases.deleteDocument(
        collection.dbId,
        collection.id,
        id
      );
    },
    deleteAll: async () => {
      // Appwrite does not provide a direct method to delete all documents in a collection
      const documents = await databases.listDocuments(
        collection.dbId,
        collection.id
      );
      return Promise.all(documents.documents.map((doc: { $id: string }) =>
        databases.deleteDocument(
          collection.dbId,
          collection.id,
          doc.$id
        )
      ));
    },
  };
});

export { db };
