const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017"
MongoClient.connect(url, function(err, client)
{
    if (err) throw err
    var tagsobj=[
        {Name: 'Smartphones', slug:'Phone-items'},
        {Name: 'Desktops', slug:'PC-Components'},
        {Name:'Cycles', slug:'Bi-Cycles'},
        {Name: 'Shoes', slug:'Sneaker-Shoes'},
        {Name: 'Watches', slug:'Wrist-Watch'},
        {Name: 'Wallet', slug:'Men-Wallet'},
        {Name: 'Smartphones', slug:'Phone-items'},
        {Name: 'Desktops', slug:'PC-Components'},
        {Name:'Cycles', slug:'Bi-Cycles'},
        {Name: 'Shoes', slug:'Sneaker-Shoes'},
        {Name: 'Watches', slug:'Wrist-Watch'},
        {Name: 'Wallet', slug:'Men-Wallet'},
        {Name: 'Smartphones', slug:'Phone-items'},
        {Name: 'Desktops', slug:'PC-Components'},
        {Name:'Cycles', slug:'Bi-Cycles'},
        {Name: 'Shoes', slug:'Sneaker-Shoes'},
        {Name: 'Watches', slug:'Wrist-Watch'},
        {Name: 'Wallet', slug:'Men-Wallet'},
    ]

    const db= client.db("ecommerce")
    //Insertion || Creation
    db.collection('Tags').insertMany(tagsobj, function(err, result)
    {
        if (err) throw err
        console.log("Inserted : "+result.insertedCount)
    })
    //Reading Data
    db.collection('Tags').find({}).toArray(function(err, result2)
    {
        if (err) throw err
        console.log("Found : "+result2.matchedCount)
        console.log(result2)
        
    })
    //Updating Data
    db.collection('Tags').updateOne({slug: 'Men-Wallet'},{$set:{slug:'Leather-Wallet'}}, function(err, result3)
    {
        if (err) throw err
        console.log("Updated");
    })

    //Deletion
    db.collection('Tags').deleteOne({Name:'Cycles'}, function(err, result4)
    {
        if (err) throw err
        console.log("Deleted : "+result4.deletedCount)
        client.close();
    })
    
})