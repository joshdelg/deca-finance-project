module.exports = {
    // Lock routes to authenticated users
   ensureAuth: function (req, res, next) {
       if(req.isAuthenticated()) {
           return next();
       } else {
           res.redirect('/');
       }
   },
   ensureGuest: function(req, res, next) {
       // Lock routes to guest users
       if(req.isAuthenticated()) {
           res.redirect('/dashboard');
       } else {
           return next();
       }
   }
}