__path = process.cwd()


var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('alone');
} catch (e) {
	console.log('Bem vindo ao anya-api!') 
}

var criador = `AloneOfc`
var key = 'AloneOfc' 

var chaveapi = 'niel'

const listkey = ["nielzinxyz"];

//*****//
var fs = require('fs');
var FormData = require('form-data');
var fetch = require('node-fetch');
var util = require('util');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();


var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { styletext, wikisearch } = require(__path + '/apis/styletext.js');

precisos = {
    digitarapikey: {
        criador : `${criador}`,
        mensage: `digite parâmetro apikey!`
    }
}


router.get('/playaudio', async(req, res, next) => {
  var apikey = req.query.apikey;
   var quero = req.query.quero;  
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/playaudio2?quero=${quero}&apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var id = dataf.id;
        var image = dataf.image;
        var titulo = dataf.titulo;
        var audio = dataf.audio;
        var video = dataf.video;
             res.json({
                 criador : `${criador}`,
                 id,
                 image,
                 titulo,
                 audio,
                 video
                 
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})
router.get('/styletext', async(req, res, next) => {
  const texto1 = req.query.texto;
  const apikey = req.query.apikey;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
  styletext(texto1).then((data) => {
 var result = data;
      res.json({
    status: true,
	creator: `${creator}`,
	result: result
      })
    })
    } else {
    	res.sendFile(__path + '/views/key.html')
    }
});

router.get('/tiktok', async(req, res, next) => {
  var apikey = req.query.apikey;
   var url = req.query.url;  
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/tiktok?url=${url}&apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var usernome = dataf.usernome;
        var nome = dataf.nome;
        var titulo = dataf.titulo;
        var like = dataf.like;        
        var comentarios = dataf.comentarios;
       var share = dataf.share;
       var views = dataf.views;
      var video = dataf.video; 
             res.json({
                 criador : `${criador}`,
                 usernome,
                 nome,
                 titulo,
                 like,
                 comentarios,
                 share,
                 views,
                 video
                 
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/xnxx', async(req, res, next) => {
  var apikey = req.query.apikey;
     var quero = req.query.quero;  
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/xnxx?quero=${quero}&apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var resultado = dataf.resultado;
             res.json({
                 criador : `${criador}`,
                 resultado              
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/pornhubp', async(req, res, next) => {
  var apikey = req.query.apikey;
     var quero = req.query.quero;  
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/pornhubp?quero=${quero}&apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var resultado = dataf;
             res.json({
                 criador : `${criador}`,
                 resultado              
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/letra', async(req, res, next) => {
  var apikey = req.query.apikey;
     var quero = req.query.quero;  
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/letra?quero=${quero}&apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var resultado = dataf;
             res.json({
                 criador : `${criador}`,
                 resultado              
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})


router.get('/xvideos', async(req, res, next) => {
  var apikey = req.query.apikey;
     var quero = req.query.quero;  
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/pesquisaxvideos?quero=${quero}&apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var resultado = dataf;
             res.json({
                 criador : `${criador}`,
                 resultado              
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/saycat', async(req, res, next) => {
  var apikey = req.query.apikey;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/saycat?apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var resultado = dataf.resultado;
             res.json({
                 criador : `${criador}`,
                 resultado              
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})


router.get('/conselho', async(req, res, next) => {
  var apikey = req.query.apikey;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/conselho?apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var frase = dataf.frase;
             res.json({
                 criador : `${criador}`,
                 frase           
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/cantadas', async(req, res, next) => {
  var apikey = req.query.apikey;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/cantadas18?apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var frase = dataf.frase;
             res.json({
                 criador : `${criador}`,
                 frase           
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/metadinha', async(req, res, next) => {
  var apikey = req.query.apikey;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/metadinha?apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var garoto = dataf.garoto;
        var garota = dataf.garota;
             res.json({
                 criador : `${criador}`,
                 garoto,
                 garota         
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/frasebomdia', async(req, res, next) => {
  var apikey = req.query.apikey;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/frasebomdia?apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var frase = dataf.frase;
             res.json({
                 criador : `${criador}`,
                 frase           
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/hentaivideo', async(req, res, next) => {
  var apikey = req.query.apikey;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/hentaivideo?apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var resultado = dataf.resultado;
             res.json({
                 criador : `${criador}`,
                 resultado              
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})



router.get('/formtext', async(req, res, next) => {
  var apikey = req.query.apikey;
     texto = req.query.texto;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/formtext?texto=${texto}apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var resultado = dataf.resultado;
             res.json({
                 criador : `${criador}`,
                 resultado        
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/telesticker', async(req, res, next) => {
  var apikey = req.query.apikey;
     url = req.query.url;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/telesticker?url=${url}apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var frase = dataf.sticker;
             res.json({
                 criador : `${criador}`,
                 sticker          
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})

router.get('/dolares', async(req, res, next) => {
  var apikey = req.query.apikey;
     quantia = req.query.quantia;
  if(!apikey) return res.json(precisos.digitarapikey)
  if(listkey.includes(apikey)){
fetch(encodeURI(`https://supraz.herokuapp.com/api/dolares?quantia=${quantia}&apikey=${chaveapi}`))
        .then(response => response.json())
        .then(dataf => {
        var valor = dataf.valor;
             res.json({
                 criador : `${criador}`,
                 valor        
             })      
             })
            } else {
	res.sendFile(__path + '/views/key.html')
}        	    	 	
})


router.get('/pinterest', async (req, res, next) => {
   quero = req.query.quero;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/pinterest?quero=' + quero + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/pinterest.jpeg', data)
        res.sendFile(__path+'/tmp/pinterest.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})


router.get('/fiction', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/fiction?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/fiction.jpeg', data)
        res.sendFile(__path+'/tmp/fiction.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})


router.get('/stickera', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/stickera?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/stickera.webp', data)
        res.sendFile(__path+'/tmp/stickera.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})


router.get('/horror', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/horror?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/horror.jpeg', data)
        res.sendFile(__path+'/tmp/horror.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/purple', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/purple?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/purple.jpeg', data)
        res.sendFile(__path+'/tmp/purple.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/esqueleto', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/esqueleto?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/esqueleto.jpeg', data)
        res.sendFile(__path+'/tmp/esqueleto.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/summer', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/summer?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/summer.jpeg', data)
        res.sendFile(__path+'/tmp/summer.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/avanco', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/avanco?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/avanco.jpeg', data)
        res.sendFile(__path+'/tmp/avanco.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/bokeh', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/bokeh?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/bokeh.jpeg', data)
        res.sendFile(__path+'/tmp/bokeh.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/thunder', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/thunder?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/thunder.jpeg', data)
        res.sendFile(__path+'/tmp/thunder.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/batman', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/batman?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/batman.jpeg', data)
        res.sendFile(__path+'/tmp/batman.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/youtext', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/youtext?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/youtext.jpeg', data)
        res.sendFile(__path+'/tmp/youtext.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/textnatal', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/textnatal?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/textnatal.jpeg', data)
        res.sendFile(__path+'/tmp/textnatal.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/spooky', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/spooky?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/spooky.jpeg', data)
        res.sendFile(__path+'/tmp/spooky.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/halloween', async (req, res, next) => {
   texto = req.query.texto;
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/halloween?texto=' + texto + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/halloween.jpeg', data)
        res.sendFile(__path+'/tmp/halloween.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/dado', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/dadu?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/dado.webp', data)
        res.sendFile(__path+'/tmp/dado.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/stickermeme', async (req, res, next) => {
   var apikey = req.query.apikey;
    texto = req.query.texto; 
    img = req.query.img;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/stickermeme?texto=' + texto + '&img=' + img + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/stickermeme.jpeg', data)
        res.sendFile(__path+'/tmp/stickermeme.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/stickermeme2', async (req, res, next) => {
   var apikey = req.query.apikey;
    texto1 = req.query.texto1; 
    texto2 = req.query.texto2; 
    img = req.query.img;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/stickermeme2?texto1=' + texto1 + '&texto2=' + texto2 + '&img=' + img + '&apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/stickermeme2.jpeg', data)
        res.sendFile(__path+'/tmp/stickermeme2.jpeg')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})	

router.get('/hug', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/hug?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/hug.webp', data)
        res.sendFile(__path+'/tmp/hug.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/shotas', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/shotas?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/shotas.webp', data)
        res.sendFile(__path+'/tmp/shotas.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/hentai', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/hentai2?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/hentai.webp', data)
        res.sendFile(__path+'/tmp/hentai.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/nfswloli', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/nfswloli?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/lolis.webp', data)
        res.sendFile(__path+'/tmp/lolis.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/pussy', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/pussy?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/pussy.webp', data)
        res.sendFile(__path+'/tmp/pussy.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})


router.get('/femdom', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/femdom?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/fendom.webp', data)
        res.sendFile(__path+'/tmp/fendom.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})


router.get('/bunda', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/bunda?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/bunda.webp', data)
        res.sendFile(__path+'/tmp/bunda.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

router.get('/prazer', async (req, res, next) => {
   var apikey = req.query.apikey;
   if(!apikey) return res.json(precisos.digitarapikey)
	if(listkey.includes(apikey)){    
      deuz = 'https://supraz.herokuapp.com/api/prazer?apikey=' + chaveapi + ''
	  data = await fetch(deuz).then(v => v.buffer())   
         await fs.writeFileSync(__path +'/tmp/prazer.webp', data)
        res.sendFile(__path+'/tmp/prazer.webp')
         } else {
	res.sendFile(__path + '/views/key.html')
}    
})

module.exports = router
