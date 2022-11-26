const {UserList} = require('../FakeData');
const _ = require('lodash')

const resolvers = {
    Query:{
        users(){
            return UserList;
        },
        user(_, args){
            const {id} = args;
            return _.find(UserList, {id});
        }

    }
}

module.exports = {resolvers};

