var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', {
    title: 'About Us',
    aboutCont: "Lorem ipsum dolor sit amet, delenit senserit signiferumque ut per. Te qui omnes ridens consetetur. His detraxit adipisci at, ei petentium interpretaris pro. Appetere corrumpit pro an, et nonumes dolores recteque vel, magna nonumy iudicabit mei ea.\
Ea viderer nonumes cum, ne timeam persecuti ius. Velit senserit eam id, semper integre vim ad. Ad usu doctus corpora, option facilisi at qui. An ullum graeco inciderint nec. Ex dictas viderer contentiones nec, ex summo melius duo.\
An definiebas necessitatibus nam. Sit eu eligendi consequat. Ea nec velit viderer labores. Ad velit scripta sea, solum mucius recusabo eum ut. Quo exerci consequuntur ne.\
An unum epicuri qui, quo ipsum reformidans ei. Solet volutpat argumentum mei in. At atomorum sensibus temporibus ius, ludus facilisis scribentur et vix. Has intellegat reprehendunt signiferumque ne, eu cibo sale pro. Paulo sapientem mea no, ius amet insolens id, vix te ipsum populo.\
Cu assum tacimates usu. Cum cu assum singulis, probo omittam verterem no pri. Quo esse quot sanctus no. Vel ne case quando suavitate. At discere graecis mea, sit possim ponderum ut."
   });
});

module.exports = router;
