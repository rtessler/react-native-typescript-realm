import Realm, { ObjectSchema } from 'realm'
import {createRealmContext} from '@realm/react';


export class Todo extends Realm.Object<Todo> {
    _id!: Realm.BSON.ObjectId
    description!: string    // realm will initialize this
    completed!: boolean
    createdAt!: Date
    
    static schema: ObjectSchema = {
        name: 'Todo',
        properties: {
        _id: 'objectId',
        description: 'string',
        completed: {type: 'bool', default: false},
        createdAt: 'date'
    }
  }
}

const realmConfig: Realm.Configuration = {
    schema: [Todo],
    onFirstOpen(realm) {

        console.log('create')

        //realm.write(() => {
            realm.create('Todo', {
                _id: new Realm.BSON.ObjectId(),
                description: 'this is the description',
                completed: false,
                createdAt: new Date()
            })
        //})

    }
}
  
export const todoContext = createRealmContext(realmConfig)

// const {RealmProvider, useRealm, useObject, useQuery} =
//   createRealmContext(realmConfig);
