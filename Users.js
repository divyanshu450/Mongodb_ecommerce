const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017/ecommerce"
MongoClient.connect(url, function(err, client)
{
    if(err) throw err;
    
    var usersobj=[
        {First_name:'Divyanshu', Last_Name:'Kumar', Email:'divyanshu.kumar@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Divyanshu', Last_Name:'K', Email:'divyanshu.@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Divy', Last_Name:'Ezikiel', Email:'divy@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Div', Last_Name:'Yuan', Email:'div@gmail.com', Profile_image:"https://pixabay.com/vectors/avatar-people-person-business-user-3637561/"},
        {First_name:'Divyansh', Last_Name:'Burghman', Email:'divyansh@gmail.com', Profile_image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fopenbase.com%2Fjs%2Fcartoon-avatar&psig=AOvVaw1pG1lhQxuD44M4bEBhlsYu&ust=1633623362991000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiJybOXtvMCFQAAAAAdAAAAABAD"},
        {First_name:'Divyanshu', Last_Name:'Kumar', Email:'divyanshu.kumar@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Divyanshu', Last_Name:'K', Email:'divyanshu.@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Divy', Last_Name:'Ezikiel', Email:'divy@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Div', Last_Name:'Yuan', Email:'div@gmail.com', Profile_image:"https://pixabay.com/vectors/avatar-people-person-business-user-3637561/"},
        {First_name:'Divyansh', Last_Name:'Burghman', Email:'divyansh@gmail.com', Profile_image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fopenbase.com%2Fjs%2Fcartoon-avatar&psig=AOvVaw1pG1lhQxuD44M4bEBhlsYu&ust=1633623362991000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiJybOXtvMCFQAAAAAdAAAAABAD"},
        {First_name:'Divyanshu', Last_Name:'Kumar', Email:'divyanshu.kumar@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Divyanshu', Last_Name:'K', Email:'divyanshu.@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Divy', Last_Name:'Ezikiel', Email:'divy@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Div', Last_Name:'Yuan', Email:'div@gmail.com', Profile_image:"https://pixabay.com/vectors/avatar-people-person-business-user-3637561/"},
        {First_name:'Divyansh', Last_Name:'Burghman', Email:'divyansh@gmail.com', Profile_image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fopenbase.com%2Fjs%2Fcartoon-avatar&psig=AOvVaw1pG1lhQxuD44M4bEBhlsYu&ust=1633623362991000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiJybOXtvMCFQAAAAAdAAAAABAD"},
    ]
    const db=client.db("ecommerce")
    
    //insertion|| creation
    db.collection("Users").insertMany(usersobj, function(err, result)
    {
        if(err) throw err;
        console.log("Inserted: "+result.insertedCount)
    })

    //reading data
    db.collection("Users").find({}).toArray(function(err, result2)
    {
        if(err) throw err;
        console.log("Found : "+result2.matchedCount)
        console.log(result2)
        
    })
    //updating data
    db.collection("Users").updateOne({Last_Name:'K'},{$set:{Last_Name:'Pandit'}}, function(err, result3)
    {
        if(err) throw err
        console.log("updated:"+result3.matchedCount)
    })
    //deleting data
    db.collection("Users").deleteOne({First_name:'Divyansh'}, function(err, result4)
    {
        if(err) throw err
        console.log("deleted: "+result4.deletedCount)
        client.close();
    })
})