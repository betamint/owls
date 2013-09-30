var fortune = function (essay) {
    var len = essay.length;
    var wise = [];
    var index = 0;

    for (var i = 0; i < len; i++)
	if (essay.substr(i, 1) == "%")
	    wise[++index] = i;
    wise[0] = 0;
    wise[index+1] = len;

    index = parseInt(index * Math.random());
    wise = essay.substr(wise[index] + 1, wise[index+1] - wise[index] - 1);
    return wise;
};
