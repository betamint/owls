isEvenYear = function (y) {
	return (y % 400 == 0) || ((y % 4 == 0) && (y % 25 != 0));
}
daysOfMonth = function (m) {
	switch (m) {
		case 1: case 3: case 5: case 7: case 8: case 10: case 12:
			return 31;
		case 4: case 6: case 9: case 11:
			return 30;
		case 2:
			return 28;
	}
}
pastDays = function (birth, end) {
	var birth, y, m, d;
	var span, ys, ms, ds;
	var days = 0;
	
	y = (birth - (birth % 10000)) / 10000;
	m = (birth - (birth % 100)) % 10000 / 100;
	d = birth % 100;
	//console.log("then = "+y+"/"+m+"/"+d);

	ys = (end - (end % 10000)) / 10000;
	ms = (end - (end % 100)) % 10000 / 100;
	ds = end % 100;
	//console.log("now = "+ys+"/"+ms+"/"+ds);

	var i;
	for (i = y; i < ys; i++)
		days += 365 + isEvenYear(i);
	for (i = 1; i < m; i++)
		days -= daysOfMonth(i);
	for (i = 1; i < ms; i++)
		days += daysOfMonth(i);
	days += (m>=2 && isEvenYear(y)) + (ms>2 && isEvenYear(ys));
	days = days - d + ds;
	
	return days;
}
