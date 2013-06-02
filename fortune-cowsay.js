cowsay = function (thought) {
    var scale = 40;

    var len = thought.length;
    var columns = scale < len ? scale : len;
    var rows;

    var top = "__";
    var bot = "--";
    for (var i = 0; i < columns; i++) {
	top += "_";
	bot += "-";
    }

    var line = new Array();
    for (rows = 0; len > 0; rows++) {
	line[rows] = thought.substr(rows * scale, scale < len ? scale : len);
	len -= scale;
    }
    if (rows === 1) {
	line[0] = "< " + line[0] + " >";
    } else {
	var space = "";
	for (; len < 0; len++)
	    space += " ";
	line[0] = "/ " + line[0] + " \\";
	line[rows-1] = "\\ " + line[rows-1] + space + " /";
	for (var i = 1; i < rows - 1; i++) {
	    line[i] = "| " + line[i] + " |";
	}
    }

    var cow = "\
        \\   ^__^\n\
         \\  (oo)\\_______\n\
            (__)\\       )\\/\\\n\
                ||----w |\n\
                ||     ||";

    var say = "";
    for (var i = 0; i < rows; i++)
	say += line[i] + "\n";
    say = " " + top + "\n" + say + " " +  bot + "\n" + cow;
    return say;
};
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