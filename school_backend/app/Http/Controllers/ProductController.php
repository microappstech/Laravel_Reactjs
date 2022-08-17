<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    function addProduct(Request $req)
    {
        $pr = new Product();
        $pr->name = $req->name;
        $pr->description = $req->description;
        $pr->price = $req->price;
        $pr->category = $req->category;
        $pr->image = $req->file("file")->store('products');
        $pr->save();
        return $pr;
    }
    function getAll()
    {
        $produts = Product::all();
        return $produts;
    }
    function delete(Request $request)
    {
        $delete = Product::where("id", $request->id)->delete();
        if ($delete) {
            return ["res" => "deleted successfully"];
        } else {
            return ["res" => "Failed"];
        }
    }
    function product(Request $request)
    {
        $product = Product::where('id', $request->id)->get();
        return $product;
    }
    function search($key)
    {
        return Product::where("name", "Like", "%$key%")->get();
    }
}
