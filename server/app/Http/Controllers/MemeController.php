<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meme;
use Illuminate\Support\Facades\DB;

class MemeController extends Controller
{
    //
    function addMeme(Request $req)
    {
        $meme = new Meme();
        $meme->title = $req->input('title');
        $meme->url = $req->file('url')->store('memes');
        $meme->category_id = $req->input('category_id');
        $meme->user_id = $req->input('user_id');
        $meme->save();
        return $meme;
    }

    function getAllMemes()
    {
        return Meme::all();
    }

    function searchMemes($key)
    {
        // return $key;
        return Meme::where('title', 'Like', "%$key%")->get();
    }

    function getMemesByEntertainments()
    {
        return DB::table('memes')
        ->join('categories', 'memes.category_id', "=" ,'categories.id')
        ->where('categories.title', "Entertainments")
        ->select('memes.*')
        ->get();
    }

    function getMemesBySports()
    {
        return DB::table('memes')
        ->join('categories', 'memes.category_id', "=" ,'categories.id')
        ->where('categories.title', "Sports")
        ->select('memes.*')
        ->get();
    }

    function getMemesByReactions()
    {
        return DB::table('memes')
        ->join('categories', 'memes.category_id', "=" ,'categories.id')
        ->where('categories.title', "Reactions")
        ->select('memes.*')
        ->get();
    }

    function getMemesByUser($userId)
    {
        return DB::table('memes')
        ->join('users', 'memes.user_id', "=" ,'users.id')
        ->where('users.id', "$userId")
        ->select('memes.*')
        ->get();
    }
}
