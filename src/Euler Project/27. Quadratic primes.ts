function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

function maxNumberOfQuadratic(a: number, b: number): number {
  for (let n = 0; ; n++) {
    const value = n * n + a * n + b;
    if (!isPrime(value)) return n;
  }
}

function quadraticPrimes() {
  let max = 0;
  let max_a = 0;
  let max_b = 0;
  for (let a = -999; a < 1000; a++) {
    for (let b = -999; b < 1000; b++) {
      const num = maxNumberOfQuadratic(a, b);
      if (num > max) {
        max = num;
        max_a = a;
        max_b = b;
        console.log(`${a} ${b} ${max}`);
      }
    }
  }

  console.log("-----");
  console.log(`${max_a} ${max_b} ${max}, ${max_a * max_b}`);
}

quadraticPrimes();
