import type { IncomingMessage, ServerResponse } from 'http'
import {clientPromise} from '../mongodb/mongodb-client';
export default (req: IncomingMessage, res: ServerResponse) => {
    return clientPromise.then(res => {
        console.log(res.db().collection("list").find());
        return  res.db().collection('list').find({}).toArray();
    });
}