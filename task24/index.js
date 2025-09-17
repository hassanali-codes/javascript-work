// ----------------------Task 24----------------------
// ----------------------Movie Rating System----------------------

class MovieRating {
    constructor(id, title, rating){
        this.id = id
        this.title = title
        this.rating = []
    }
    addRating(rate){
        if(rate >= 1 && rate <= 5){
            this.rating.push(rate)
        }
        else{
            console.log("Rating must be between 1 and 5")
        }
    }
    avgRating(){
        let avg = 0
        for(let i=0; i<this.rating.length; i++){
            avg += this.rating[i]
        }
        return Math.floor(avg/this.rating.length)
    }    
    
}  
function highestRated(movies){
    let highRated = movies[0]
    for(let i=1; i< movies.length; i++){
        if(movies[i].avgRating() > highRated.avgRating()){
            highRated = movies[i]         
        }
    }
    return highRated;
}   

let movie1 = new MovieRating(1, "counjuring Last Rites");
movie1.addRating(5);
movie1.addRating(4);
movie1.addRating(3);

let movie2 = new MovieRating(2, "Final destination");
movie2.addRating(5);
movie2.addRating(4);
movie2.addRating(5);

let movie3 = new MovieRating(3, "F1");
movie3.addRating(4);
movie3.addRating(2);
movie3.addRating(1);

let movies = [movie1, movie2, movie3];   
console.log(movie1.avgRating())
console.log(movie2.avgRating())
console.log(movie3.avgRating())
console.log("Highest Rated:", highestRated(movies).title);
