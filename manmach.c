/* inspired by http://www.loper-os.org/bad-at-entropy/manmach.html */

#include<stdio.h>
#include<math.h>

int main () {
  int m[2][3][2][3][2] = {0};
  int k1 = 0, k2 = 0, p1 = 0, p2 = 0;
  int n1 = 2, n;
  int sp = 0, sk = 0;

  int i = 1;
  while (scanf("%d", &n) != EOF) {
    printf("%d\n", n1);
    if (n1 != 2) {
      if (n == n1) {
	sk = sk + 1;
      } else {
	sp = sp + 1;
      }
    }
    printf("#%d sp=%d sk=%d\n", i, sp, sk);

    if (i > 2) {
      if (abs(m[p1][k1][p2][k2][0] - m[p1][k1][p2][k2][1])
	  <= 1.8 * pow(1.01, i)) {
	n1 = 2;
      } else if (m[p1][k1][p2][k2][0] < m[p1][k1][p2][k2][1]) {
	n1 = 1;
      } else {
	n1 = 0;
      }

      m[p1][k1][p2][k2][n] = m[p1][k1][p2][k2][n] + pow(1.1, i);
    }

    k1 = k2; k2 = n1; p1 = p2; p2 = n;
    i = i + 1;
  }
}
