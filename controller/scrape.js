var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');



module.exports.scrape = async(req, res,next) => {  
  try{
    const  url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function(error, response, html){
      if(!error){
        var $ = cheerio.load(html);
    
        var title, release, rating;
        var json = { title : "", release : "", rating : ""};
    
        $('.title_wrapper').filter(function(){
          var data = $(this);
          title = data.children().first().text().trim();
          release = data.children().last().children().last().text().trim();
    
          json.title = title;
          json.release = release;
        })
    
        $('.ratingValue').filter(function(){
          var data = $(this);
          rating = data.text().trim();
    
          json.rating = rating;
        })
      }
      res.send(json)
    })
  }catch(err){
    next(err)
  }
}    
