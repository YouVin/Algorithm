#include <stdio.h>

int counts[10001]; 

int main(void) {
    int N, x;
    scanf("%d", &N);

    for (int i = 0; i < N; i++) {
        scanf("%d", &x);
        counts[x]++;
    }

    for (int v = 1; v <= 10000; v++) {
        while (counts[v] > 0) {
            printf("%d\n", v);
            counts[v]--;
        }
    }
    return 0;
}
