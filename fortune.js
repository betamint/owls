var fortune = function (essay, sep) {
    var len = essay.length;
    var slen = sep.length;
    var wise = [];
    var index = 0;

    for (var i = 0; i < len; i++)
	if (essay.substr(i, slen) == sep)
	    wise[++index] = i;
    wise[0] = - slen;
    wise[index+1] = len;

    index = parseInt(index * Math.random());
    wise = essay.substr(wise[index] + slen, wise[index+1] - wise[index] - slen);
    return wise;
};
