var fs=require("fs");  // fs is a node package to read and write files

fs.writeFile("movie.text", "forest gump, inception, harry potter", function(err){       // if there is no movies.txt, it will creat one and "forest gump, inception, harry potter" will be printed in movies.txt

    if (err){
        return console.log(err);   //if the code experiences any error, it will log the erroe to the console
    }
    else {
        console.log("movie.txt was updated");  // otherwise it wil print the movie.txt was updated
    }
   
});