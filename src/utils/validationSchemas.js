export const createCompanyValidationSchema = {
    rank: {
        
    }
}

/*

  body('rank')
    .notEmpty().withMessage('Rank je zahtevan!')
    .isInt({ min: 1, max: 500 }).withMessage('Rank mora imeti vrednost med 1 and 500!'),
  
  body('ime')
    .notEmpty().withMessage('Ime je zahtevano!')
    .isLength({ min: 2 }).withMessage('Ime mora imeti vsaj 2 črki!'),
  
  body('prihodek')
    .notEmpty().withMessage('Prihodek je zahtevan!')
    .matches(/^\d+(\.\d{1,2})?$/).withMessage('Prihodek mora biti celoštevilčen ali decimalen (do 2 decimalki)!'),

  body('dobicek')
    .notEmpty().withMessage('Dobiček je zahtevan!')
    .matches(/^\d+(\.\d{1,2})?$/).withMessage('Dobiček mora biti celoštevilčen ali decimalen (do 2 decimalki)!'),

  body('sredstva')
    .notEmpty().withMessage('Sredstva so zahtevana!')
    .matches(/^\d+(\.\d{1,2})?$/).withMessage('Sredstva morajo biti celoštevilčna ali decimalna (do 2 decimalki)!'),

  body('stZaposlenih')
    .notEmpty().withMessage('Št. zaposlenih je zahtevano!')
    .isInt().withMessage('Št. zaposlenih mora biti celoštevilčna vrednost!')


*/