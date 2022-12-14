var Twit = require('twit')
 
var T = new Twit({
  consumer_key:'bik4BALN3L9fK85CuXnqJOaNh',
  consumer_secret:'rz2kUyw3VPt89tpua4q24Td5lAmvK7ZSNIf6obvkPkkkNOXRul',
  access_token: '793163214846582784-LteZ1VFTQe6gvpa4piZ9Nq2xl6hhX4d',
  access_token_secret:'q5s8Vn8Lc3BQxbjbJfte3BA1UdKgWZM4vSBIdzRSOeFWz',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
 // strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

T.get('followers/ids', { screen_name: '_simba_jr_' },  function (err, data, response) {
  if(err){
    console.log(err);
  }
    console.log(data)
  })
  T.get('statuses/user_timeline',{ screen_name: '_simba_jr_' }, function(error, tweets, response) {
  if (!error) {
    document.getElementById("me")
    document.write(T.tweets);
    //console.log(tweets);
  }
});


/*T.post('statuses/update', { status: 'Avengers!' }, function(err, data, response) {
  console.log(data)
});*/
