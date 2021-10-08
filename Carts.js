const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017/ecommerce"
MongoClient.connect(url , function(err, client)
{
    if(err) throw err
    var cartobj=[
        {Product:'Laptops', User: 'vb001', Product_Qty:2, Base_Price:829.30, Sell_Price:1020.30, Total_Price:1050.50, roles:'dispatching items'},
        {Product:'Smartphones', User: 'vb002', Product_Qty:2, Base_Price:819.30, Sell_Price:1100.30, Total_Price:1250.50, roles:'waiting for confirmation'},
        {Product:'Accessories', User: 'vb006', Product_Qty:2, Base_Price:629.30, Sell_Price:750.30, Total_Price:780.50, roles:'verifying payment'},
        {Product:'Shoes', User: 'vb001', Product_Qty:1, Base_Price:329.30, Sell_Price:420.30, Total_Price:490.50, roles:'checking transactions'},
        {Product:'Laptops', User: 'vb001', Product_Qty:2, Base_Price:829.30, Sell_Price:1020.30, Total_Price:1050.50, roles:'checking configuration'},
        {Product:'Smartphones', User: 'vb002', Product_Qty:2, Base_Price:819.30, Sell_Price:1100.30, Total_Price:1250.50,roles:'placing order'},
        {Product:'Accessories', User: 'vb006', Product_Qty:2, Base_Price:629.30, Sell_Price:750.30, Total_Price:780.50, roles:'canceling order'},
        {Product:'Shoes', User: 'vb001', Product_Qty:1, Base_Price:329.30, Sell_Price:420.30, Total_Price:490.50, roles:'checking transaction'},
        {Product:'Laptops', User: 'vb001', Product_Qty:2, Base_Price:829.30, Sell_Price:1020.30, Total_Price:1050.50, roles:'checking for extra discount'},
        {Product:'Smartphones', User: 'vb002', Product_Qty:2, Base_Price:819.30, Sell_Price:1100.30, Total_Price:1250.50, roles:'dispatching'},
        {Product:'Accessories', User: 'vb006', Product_Qty:2, Base_Price:629.30, Sell_Price:750.30, Total_Price:780.50, roles:'counting items'},
        {Product:'Shoes', User: 'vb001', Product_Qty:1, Base_Price:329.30, Sell_Price:420.30, Total_Price:490.50, roles:'placing order'},
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
        console.log("Found : "+result2.matchedcount)
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