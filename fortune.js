var fortune = function () {
    var wisdom = ["/fortune-cowsay/fortunes",
		 "/fortune-cowsay/literature"];
    wisdom = wisdom[parseInt (wisdom.length * Math.random())];

    var wise;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", wisdom, true);
    ajax.send();
    ajax.onreadystatechange = function () {
	if (ajax.readyState == 4 && ajax.status == 200) {
	    var len = ajax.responseText.length;
	    wise = new Array(0);
	    var number = 0;
	    for (var i = 0; i < len; i++)
		if (ajax.responseText.substr(i, 1) == "%")
		    wise[++number] = i;
	    wise[0] = 0;
	    wise[number+1] = len;
	    number = parseInt(number * Math.random());
	    wise = ajax.responseText
		.substr(wise[number] + 1, wise[number+1] - wise[number] - 1);
	    return wise;
	}
    };
};