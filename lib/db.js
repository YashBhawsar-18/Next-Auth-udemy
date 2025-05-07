import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect("mongodb+srv://yashbhawsar:90909090@cluster0.dfllzyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    
    return client;
}

