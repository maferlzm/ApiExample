import express from 'express';

export class ThingsRoutes{

    public thingsRoutes(app:express.Application){
        //definiremos nuestras URLs

        app.get('/',(req,res)=>{
            console.log('Entramos al get')
                return res.json('Hola esta es una prueba');
            }
        )
    }
}