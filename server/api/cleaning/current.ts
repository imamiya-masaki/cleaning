import type { IncomingMessage, ServerResponse } from 'http'
import {clientPromise} from '../../mongodb/mongodb-client';
import { useQuery } from 'h3'
export default async(req, res) => {
    let number = 5;
    const query = useQuery(req)
    if (query.c) {
        number = Number(query.c);
    }
    return clientPromise.then(cr => {
        return  cr.db().collection('cleaning').find({}).limit(number).toArray();
    });
}