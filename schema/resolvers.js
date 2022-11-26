const {UserList} = require('../FakeData');
const _ = require('lodash')

const resolvers = {
    Query:{
        users(){
            return UserList;
        },
        user(parent, args){
            const id = args.id;
            return _.find(UserList, {id: Number(id)});
        }

    }
}

module.exports = {resolvers};

