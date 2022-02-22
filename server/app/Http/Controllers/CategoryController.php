<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    function addCategory(Request $req)
    {
        $category = new Category();
        $category->title = $req->input('title');
        $category->save();
        return $category;
    }

    function getAllCategories()
    {
        return Category::all();
    }
}
