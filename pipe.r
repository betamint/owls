`%>%` <- function (arg, fun) {
    arg <- substitute(arg);
    fun <- substitute(fun);
    eval(as.call(c(fun, arg)), parent.frame())
};
