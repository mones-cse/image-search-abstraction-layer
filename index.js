//modal
require('dotenv').config()
var express = require('express');
var mongoose = require('mongoose');
var GoogleSearch = require('google-search');
//express
var app = express();
app.set('port',process.env.PORT||8080);
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//mongoose setup
mongoose.connect(process.env.DB_URL);
// console.log(mongoose.connection.readyState);
imageSearchSchema = new mongoose.Schema({
    term: String,
    when: Date
})
ImageSearchModel = mongoose.model('ImageSearchModel', imageSearchSchema);
//google search setup
var googleSearch = new GoogleSearch({
    key: process.env.CSE_KEY,
    cx: process.env.CSE_CX
});
//home page 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/info.html');
})
//seacrh image
app.get('/api/imagesearch/:topic', function (req, res) {
    //save req 
    var searchItem = {
        term: req.params.topic,
        when: new Date
    }
    ImageSearchModel(searchItem).save(function (err, res) {
        if (err) throw err;
        // console.log('saved data ',res);
    })
    
    //get data
    var topic = req.params.topic;
    var offset =req.query.offset;
    googleSearch.build({
        q: topic,
        start: offset||1,
        searchType: "image",
    }, function (error, response) {
        if (error) return error;
        if (response.error) {
            res.send('Bad request');
            return;
        }
        var filterdData = [];
        for (var i = 0; i < response.items.length; i++) {
            filterdData.push({
                url: response.items[i].link,
                snippet: response.items[i].snippet,
                thumbnail: response.items[i].image.thumbnailLink,
                context: response.items[i].image.contextLink
            })
        }

        res.json(filterdData);
    });

});
//show search history 
app.get('/api/latest/imagesearch/', function (req, res) {
    ImageSearchModel.find({}, function (errro, response) {
        if (errro) throw errro;
        var filterdData = [];
        for (var i = 0; i < response.length; i++) {
            filterdData.push({
                term: response[i].term,
                when: response[i].when
            })
        }
        res.json(filterdData);
    })
})

