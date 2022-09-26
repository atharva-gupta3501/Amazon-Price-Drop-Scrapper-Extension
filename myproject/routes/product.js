const express = require("express");
const { check, validationResult} = require("express-validator/check");
const { ChangeStream } = require("mongodb");
const router = express.Router();
const Product = require("../model/Product");

/**
 * @method - POST
 * @param - /add
 * @description - add product
 */

router.post(
    "/add",
    [
        check("product_title", "Please Enter a product name")
        .not()
        .isEmpty(),
        check("price", "Please enter a valid price")
        .not()
        .isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            product_title,
            price
        } = req.body;
        try {
            let product = await Product.findOne({
                product_title
            });
            if (product) {
                let orgprice = product.price;
                Product.deleteOne({ product_title }, function (err) {
                    if (err) return handleError(err);
                    // deleted at most one tank document
                  });
                product = new Product({
                    product_title,
                    price
                });
                let change = "same";
                if(price>orgprice){
                    change = "increase";
                }
                else if(price<orgprice){
                    change = "decrease";
                }
    
    
                await product.save();
                
                return res.status(200).json(change);
            }

            product = new Product({
                product_title,
                price
            });


            await product.save();
            res.status(200).send("Product Added");
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

module.exports = router;