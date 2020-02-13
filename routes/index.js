var express = require('express');
var router = express.Router();

/* GET rota de somar. */
router.get('/somar/:numero1/:numero2', function(req, res, next) {
  // req - request (obtem dados)
  // res - response (devolve dados)


  // captar var do tipo params (parametros de url)
  var numero1 = Number(req.params.numero1)
  var numero2 = Number(req.params.numero2)

  var total = numero1 + numero2

    // captar var do tipo query (Ex: ?numero1)
    // var numero1 = req.query.numero1

    res.status(200).json({
      "total":total,
      "mensagem": `A soma é igual a ${total}`
    })

});

/* GET rota de dividir. */
router.get('/dividir/:numero1/:numero2', function(req, res, next) {

  // captar var do tipo params (parametros de url)
  var numero1 = Number(req.params.numero1)
  var numero2 = Number(req.params.numero2)

  var total = numero1 / numero2


    res.status(200).json({
      "total":total,
      "mensagem": `A divisão é igual a ${total}`
    })

});


/* GET rota de multiplicar. */
router.get('/multiplicar/:numero1/:numero2', function(req, res, next) {

  // captar var do tipo params (parametros de url)
  var numero1 = Number(req.params.numero1)
  var numero2 = Number(req.params.numero2)

  var total = numero1 * numero2


    res.status(200).json({
      "total":total,
      "mensagem": `A multiplicão é igual a ${total}`
    })

});

/* GET rota de subitrair. */
router.get('/subtrair/:numero1/:numero2', function(req, res, next) {

  // captar var do tipo params (parametros de url)
  var numero1 = Number(req.params.numero1)
  var numero2 = Number(req.params.numero2)

  var total = numero1 - numero2


    res.status(200).json({
      "total":total,
      "mensagem": `A subtração é igual a ${total}`
    })

});



module.exports = router;
