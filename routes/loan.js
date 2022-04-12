var express = require('express');
var router = express.Router();
var pmt = require('formula-pmt');


/* GET loan amount. */
router.get('/', function(req, res, next) {
  
  // Request vars
  var intrest_pa = parseFloat(req.query.intrest_pa);
  var loan_term_months = parseInt(req.query.loan_term_months);
  var total_loan_amount = parseInt(req.query.total_loan_amount);
  var monthly_fee = parseInt(req.query.monthly_fee);
  var broker_fee = parseFloat(req.query.broker_fee);

  // Intrest 5.5% = 0.055
  if (!intrest_pa) {
    res.send('No intrest_pa detected in request');
  }

  // Months per year e.g 5 year = 60
  if (!loan_term_months) {
    res.send('No loan_term_months detected in request');
  }

  // total loan amount
  if (!total_loan_amount) {
    res.send('No total_loan_amount detected in request');
  }

   // monthly fee
   if (!monthly_fee) {
     res.send('No monthly_fee detected in request');
   }

  // broker fee
  if (!broker_fee) {
    res.send('No broker_fee detected in request');
  }
    
  // Formula = (pmt(interest p.a / months per year, loan term months, total loan amount) - broker fee) * (1 + (Broker fee (p.a)/ loan term months))
  var result = (pmt( intrest_pa / 12, loan_term_months, total_loan_amount) - monthly_fee) * (1 + (broker_fee / loan_term_months));

  if (!result) {
    res.send('invalid result');
  }

  // repayment amount.
  res.send('loan repayment: ' + String(result));
});

module.exports = router;