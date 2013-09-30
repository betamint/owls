var searchStrList = function (list, str) {
    var on = [], off = [];
    var jon = 0, joff = 0;

    for (var i = 0; i < list.length; i++) {
	if (list[i].match(str))
	    on[jon++] = i;
	else
	    off[joff++] = i;
    }

    return {"on": on, "off": off};
};

var eleToStrList = function (e) {
    var n = 0, list = [];

    for (var i = 0; i < e.childElementCount; i++)
	list[n++] = e.children[i].innerText;

    return list;
};

var filtHTML = function (e, str, dealOn, dealOff) {
    var filter = searchStrList(eleToStrList(e), str);

    for (var i = 0; i < filter.on.length; i++)
	dealOn(e.children[filter.on[i]]);
    for (var i = 0; i < filter.off.length; i++)
	dealOff(e.children[filter.off[i]]);
};

var simpleFilter = function (e, str, dealOn, dealOff) {
    for (var i = 0; i < e.childElementCount; i++) {
	if (e.children[i].innerText.match(str))
	    dealOn(e.children[i]);
	else
	    dealOff(e.children[i]);
    }
};
