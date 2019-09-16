var ProductService = require("../services/productservice");
var productService = new ProductService();

class IndexController{
    async index(req,res,next){
        var listProduct  = await productService.getAll();
        //console.log(JSON.stringify(listProduct, null, 4));
        res.render('index2', { listProduct: listProduct });
    }
    async search(req,res,next){
        var search = req.body.search;
        var listProduct  = null;
        if(search ===""){
            listProduct  = await productService.getAll();
        }else{
            listProduct  = await productService.getAllBySearch(req.body.search);
        }
        res.render('index2', { listProduct: listProduct });
    }
}
module.exports = IndexController;