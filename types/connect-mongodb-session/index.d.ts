// Type definitions for connect-mongodb-session
// Project: https://github.com/mongodb-js/connect-mongodb-session#readme
// Definitions by: Nattapong Sirilappanich <https://github.com/NattapongSiri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="express-session" />

import session = require('express-session');
import * as express from 'express';
import {MongoClient, MongoClientOptions} from 'mongodb'

declare function connect(fn : (options?: session.SessionOptions) => express.RequestHandler) : connectMongodbSession.MongoDBStore

declare namespace connectMongodbSession {
    export interface MongoDBStore extends session.Store {
        client : MongoClient
        new(connection?: ConnectionInfo, callback?: (error : Error) => void) : MongoDBStore
    }

    export interface ConnectionInfo {
        idField? : string
        collection : string
        connectionOptions?: MongoClientOptions
        databaseName?: string
        expires?: number
        uri : string
    }
}

export = connect
