var paperdb=require('./paperdb')
paperdb.getSubjectLevel().then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(报错了);
});