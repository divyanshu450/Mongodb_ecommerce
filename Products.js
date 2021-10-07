const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017"
MongoClient.connect(url, function(err, client)
{
    if (err) throw err;
    var smartphone=['https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-go.jpg','https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-go-2.jpg','https://fdn.gsmarena.com/vv/reviewsimg/sony-xperia-go/gal/gsmarena_021.jpg']
    var laptop=['https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://cdn.vox-cdn.com/thumbor/lRwetR_dg8WBLFIUPzY7l0QYCaI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22411713/cfaulkner_20210326_4491_0006.jpg','https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_brb/public/field/image/2021/01/hp-spectre-x360-14-hero3.jpg']
    var clothes=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvFnE4-O6o4hS10wV5K4smhmoBKefNBbPOA&usqp=CAU','https://i2.wp.com/www.swagshirts99.com/wp-content/uploads/2020/03/CCD29B43-0F78-442B-9059-FDC90A212145.jpeg?resize=300%2C373&ssl=1','https://floydology.com/wp-content/uploads/2019/02/Rick-and-Morty-x-Pink-Floyd-Tshirt-Hoodie-Sweatshirt-mock2.jpg'];
    var watches=['https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-se-202107?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1627332487000','https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg','https://www.apple.com/newsroom/images/tile-images/Apple_watch_series_5_introduces-always-on-retina-display_091019.jpg.news_app_ed.jpg'];
    var shoes=['https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ca00985b-a04a-4b2f-a7b9-b70ea92a2ae3/jordan-1-mid-se-younger-shoe-jTnL6p.png','https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/11/19/72081f46-293c-11eb-bf26-f2b76f37a526_972x_172805.jpeg','https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj3Retro3.jpg']
    var productobj=[
        {Name:'Smartphones', Thumbnails:'https://www.xda-developers.com/files/2021/04/Best-Smartphones-to-buy-in-April-2021-1.jpg', Product_Gallery:{smartphone}, Description:'Smartphone with 5G', Base_Price:'389.56', Sell_Price:'520.70', Category_Name:'gadgets', Tags:'Mobiles', Additional_info:'Can beat China phones with ease'},
        {Name: 'Laptop', Thumbnails: 'https://cdn.arstechnica.net/wp-content/uploads/2020/05/Razer-Blade-Pro-17-640x427.jpg', Product_Gallery:{laptop}, Description:'32mb L1 cache Gaming Laptop', Base_Price:'1200.89', Sell_Price:'1500.10', Category_Name:'Gaming Laptops',Tags:'Laptops',Additional_info:'High End gaming laptop with the mighty RTX series from Nvidia' },
        {Name: 'Clothes', Thumbnails: 'https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?size=626&ext=jpg', Product_Gallery:{clothes}, Description:'Latest Summer trending clothes', Base_Price:'29.9', Sell_Price:'38.5', Category_Name:'Fashion',Tags:'Summer Wear',Additional_info:'Comfort summer wear with wide ranges to choose from' },
        {Name: 'Watches', Thumbnails: 'https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg', Product_Gallery:{watches}, Description:'Smartwatches with elegant style', Base_Price:'1600.89', Sell_Price:'1879.69', Category_Name:'Watches',Tags:'Smartwatch',Additional_info:'Latest smartwatch with high end accurate sensors' },
        {Name: 'Shoes', Thumbnails: 'https://5.imimg.com/data5/BB/CV/SQ/SELLER-74573575/air-jordan-casual-shoes-250x250.jpg', Product_Gallery:{shoes}, Description:'Jordan jumpman limited edition shoes', Base_Price:'499.99', Sell_Price:'750.49', Category_Name:'Fashion',Tags:'Sneakers',Additional_info:'limited edition jordan jumpman with new colors to choose from' },

    ]
    const db=client.db('ecommerce')
    //Insertion || Creation
    db.collection('Products').insertMany(productobj, function(err, result)
    {
        if (err) throw err
        console.log("Inserted : "+result.insertedCount)
    })
    //Readind data
    db.collection('Products').find({}).toArray(function(err, result2)
    {
        if (err) throw err;
        console.log(result2)
    })
    // Updating Data
    db.collection('Products').updateOne({Category_Name:'Fashion'},{$set:{Category_Name:'Shoes'}}, function(err, result3)
    {
        if (err) throw err
        console.log("Updated : "+result3.matchedCount)
    })
    // Deleting data
    db.collection('Products').deleteOne({Name:'Laptop'}, function(err, result4)
    {
        console.log("Deleted : "+result4.deletedCount)
        client.close();
    })
})