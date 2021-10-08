const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017/"
MongoClient.connect(url, function(err, client)
{
    if (err) throw err
    var rolesobj=[
        {Name:'Divyanshu', slug: 'Dev-Divyanshu'},
        {Name:'Saqlain', slug:'Mgr-Saqlain'},
        {Name: 'Farhan', slug: 'Hr-Farhan'},
        {Name: 'Rahul', slug:'Mgmt-Rahul'},
        {Name: 'Irene', slug:'Emp-Irene'},
        {Name:'Divyanshu', slug: 'Dev-Divyanshu'},
        {Name:'Saqlain', slug:'Mgr-Saqlain'},
        {Name: 'Farhan', slug: 'Hr-Farhan'},
        {Name: 'Rahul', slug:'Mgmt-Rahul'},
        {Name: 'Irene', slug:'Emp-Irene'},
        {Name:'Divyanshu', slug: 'Dev-Divyanshu'},
        {Name:'Saqlain', slug:'Mgr-Saqlain'},
        {Name: 'Farhan', slug: 'Hr-Farhan'},
        {Name: 'Rahul', slug:'Mgmt-Rahul'},
        {Name: 'Irene', slug:'Emp-Irene'},
    ]
    const db=client.db('ecommerce');
    //Creation || Insertion
    db.collection('Roles').insertMany(rolesobj, function(err, result)
    {
        if (err) throw err;
        console.log("Inserted"+result.insertedCount);
    })
    //Reading data
    db.collection('Roles').find().toArray(function(err, result2)
    {
        if(err) throw err
        console.log("Found : "+result2.matchedCount)
        console.log(result2);
    })
    //Updating Data
    db.collection('Roles').updateMany({slug:'Emp-Irene'},{$set:{slug:'Queen-Irene'}}, function(err, result3)
    {
        if(err) throw err
        console.log("Updated: "+result3.matchedCount)
    })
    //Deleting Data
    db.collection('Roles').deleteOne({slug:'Hr-Farhan'}, function(err, result4)
    {
        if(err) throw err
        console.log("deleted: "+result4.deletedCount)
        client.close();
    })

})