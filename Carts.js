const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017/ecommerce"
MongoClient.connect(url , function(err, client)
{
    if(err) throw err
    var cartobj=[
        {Product:'Laptops', User: 'vb001', Product_Qty:2, Base_Price:829.30, Sell_Price:1020.30, Total_Price:1050.50},
        {Product:'Smartphones', User: 'vb002', Product_Qty:2, Base_Price:819.30, Sell_Price:1100.30, Total_Price:1250.50},
        {Product:'Accessories', User: 'vb006', Product_Qty:2, Base_Price:629.30, Sell_Price:750.30, Total_Price:780.50},
        {Product:'Shoes', User: 'vb001', Product_Qty:1, Base_Price:329.30, Sell_Price:420.30, Total_Price:490.50},
    ];

    const db=client.db("ecommerce")
    //insertion|| creation of data
    db.collection('Carts').insertMany(cartobj, function(err, res)
    {
        if(err) throw err
        console.log(client.insertedCount+"inserted");
        
        
    })
    //updating data
    db.collection("Carts").updateOne({Product:'Shoes'},{$set:{Product:'Sports_Shoes'}}, function(err, result)
    {
        if(err) throw err
        console.log("Updated"+result)
        
    })
    //reading data
    db.collection("Carts").find({}).toArray(function(err, result2)
    {
        if(err) throw err
        console.log(result2)
        
        
    })
    //Deleting data
    db.collection("Carts").deleteOne({Product:'Laptops'}, function(err, result3)
    {
        if(err) throw err
        console.log("Deleted")
        client.close();
    })
    
})