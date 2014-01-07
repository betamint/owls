plot(rnorm(3), xlim=c(-3,3), ylim=c(-3,3), type="n", axes=FALSE);

### latin character
text(runif(100,-3,3), runif(100,-3,3),
     intToUtf8(sample(c(65:90, 97:122), 100, replace=TRUE), multiple=TRUE),
     col=rgb(runif(100), runif(100), runif(100), 0.5 + runif(100)/2),
     cex=1.5);

### han character
text(runif(100,-3,3),
     runif(100,-3,3),
     intToUtf8(round(runif(100, 19968,40869)),
               multiple=TRUE),
     col=rgb(runif(100), runif(100), runif(100), 0.5 + runif(100)/2),
     cex=2);
