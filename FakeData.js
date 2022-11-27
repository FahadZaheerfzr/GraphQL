const UserList = [
    {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        age: 25,
        nationality: 'US',
        friends:[
            {
                id: 2,
                name: 'Jane Doe',
                username: 'janedoe',
                age: 22,
                nationality: 'Canada'
            },
            {
                id: 3,
                name: 'John Smith',
                username: 'johnsmith',
                age: 30,
                nationality: 'UK'
            },
        ],
        favoriteMovies:[1,2,3]
    },
    {
        id: 2,
        name: 'Jane Doe',
        username: 'janedoe',
        age: 22,
        nationality: 'Canada',
        favoriteMovies:[4,5]
    },
    {
        id: 3,
        name: 'John Smith',
        username: 'johnsmith',
        age: 30,
        nationality: 'UK',
        friends: [
            {
                id: 5,
                name: 'Adam Smith',
                username: 'adamsmith',
                age: 35,
                nationality: 'Scotland'
            }
        ],
        favoriteMovies:[1,4,3]
    },
    {
        id: 4,
        name: 'Jane Smith',
        username: 'janesmith',
        age: 28,
        nationality: 'Poland',
        favoriteMovies:[2,3,2]
    },
    {
        id: 5,
        name: 'Adam Smith',
        username: 'adamsmith',
        age: 35,
        nationality: 'Scotland',
        favoriteMovies:[5]
    },
]

const MovieList = [
    {
        id: 1,
        name: 'The Godfather',
        rating: 9.2,
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        isInTheaters: true
    },
    {
        id: 2,
        name: 'The Shawshank Redemption',
        rating: 9.3,
        isInTheaters: false
    },
    {
        id: 3,
        name: 'The Dark Knight',
        rating: 9.0,
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        isInTheaters: true
    },
    {
        id: 4,
        name: 'The Godfather: Part II',
        rating: 8.2,
        description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        isInTheaters: false
    },
    {
        id: 5,
        name: 'The Lord of the Rings: The Return of the King',
        rating: 8.9,
        description: "Geneticist Will Rodman is determined to find a cure for Alzheimer's, the disease which has slowly consumed his father. Will feels certain he is close to a breakthrough and tests his latest serum on apes, noticing dramatic increases in intelligence and brain activity in the primate subjects - especially Caesar, his pet chimpanzee.",
        isInTheaters: true
    },
]
module.exports =  {UserList, MovieList};