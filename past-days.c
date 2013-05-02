#include<stdio.h>
int isEvenYear(int y) {
  return (y % 400 == 0) || ((y % 4 == 0) && (y % 25 != 0));
}
int daysOfMonth(int m) {
  switch(m) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    return 31;
  case 4: case 6: case 9: case 11:
    return 30;
  case 2:
    return 28;
  }
}
int main() {
  int birth, y, m, d;
  int span, ys, ms, ds;
  int pastDays = 0;
  
  printf("start yyyymmdd:\t");  scanf("%d", &birth);
  printf("end yyyymmdd:\t");  scanf("%d", &span);
  
  y = birth / 10000;  m = birth % 10000 / 100;  d = birth % 100;
  ys = span / 10000;  ms = span % 10000 / 100;  ds = span % 100;

  int i;
  for(i = y + 1; i < ys; i++)
    pastDays += 365 + isEvenYear(y);
  for(i = m ; i < 13; i++)
    pastDays += daysOfMonth(i);
  for(i = 1; i < ms; i++)
    pastDays += daysOfMonth(i);
  pastDays = pastDays - d + ds;

  printf("\ndays past: %d\n\thappy hacking\n\thappy lifing\n", pastDays);
  scanf("%d", &i);
  return 0;
}
