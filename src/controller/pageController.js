import express from "express";

export const home = (req, res)=>{
    res.render('pages/page',{
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
    
};

export const dogs = (req, res)=>{   
    res.render('pages/page',{
        banner: {
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        }
    });
};

export const cats = (req, res)=>{
    res.render('pages/page',{
        banner: {
            title: 'Todos os Gatos',
            background: 'allanimals.jpg'
        }
    });
};

export const fishes = (req, res)=>{
    res.render('pages/page',{
        banner: {
            title: 'Todos os Peixes',
            background: 'allanimals.jpg'
        }
    });
};