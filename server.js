const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())

let Pokemon = {

    'pikachu':{
            level: 30,
            Type:'Electric'
    },
    'xerneas':{
        level: 100,
        Type:'Mystic'
    },
'psychokwak':{
    level: 30,
    Type:'Psychic'
    },
    'unknown':{
        level:'unknown',
        Type:'unknown'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/pokemon',(request,response)=>{
    response.json(Pokemon)
})

app.get('/pokemon/:pokemonName',(request,response) =>{
    let pokemonNaming = request.params.pokemonName.toLowerCase()
    if(Pokemon[pokemonNaming]){
       
        response.json(Pokemon[pokemonNaming])
    }else{
        response.json(Pokemon['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`Your server is live on ${PORT}`)
})