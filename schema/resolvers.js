const {UserList, MovieList} = require('../FakeData');
const _ = require('lodash')

const resolvers = {
    Query:{
        users(){
            return UserList;
        },
        user(parent, args){
            const id = args.id;
            return _.find(UserList, {id: Number(id)});
        },

        movies(){
            return MovieList;
        },

        movie(parent, args){
            const name =args.name;
            return _.find(MovieList, {name: name})
        }
    },
    User:{
        favoriteMovies(parent){
            return MovieList.filter((movie)=> {
                if(parent.favoriteMovies.includes(movie.id)) return movie;
            });
        }
    }
}

module.exports = {resolvers};

