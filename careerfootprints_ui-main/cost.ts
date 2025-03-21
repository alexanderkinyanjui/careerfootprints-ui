export function calculateServiceCharge(amount: number): number {
  let serviceCharge;

  if (amount <= 2000) {
    serviceCharge = 0.0;
  } else if (amount <= 2500) {
    serviceCharge = 50.0;
  } else if (amount <= 3500) {
    serviceCharge = 70.0;
  } else if (amount <= 5000) {
    serviceCharge = 100.0;
  } else if (amount <= 7500) {
    serviceCharge = 150.0;
  } else if (amount <= 10000) {
    serviceCharge = 200.0;
  } else if (amount <= 15000) {
    serviceCharge = 300.0;
  } else if (amount <= 20000) {
    serviceCharge = 400.0;
  } else if (amount <= 25000) {
    serviceCharge = 500.0;
  } else if (amount <= 30000) {
    serviceCharge = 600.0;
  } else if (amount <= 35000) {
    serviceCharge = 700.0;
  } else if (amount <= 40000) {
    serviceCharge = 800.0;
  } else if (amount <= 45000) {
    serviceCharge = 900.0;
  } else if (amount <= 50000) {
    serviceCharge = 1000.0;
  } else if (amount <= 70000) {
    serviceCharge = 1000.0;
  } else {
    serviceCharge = Math.floor(amount * 0.016);
  }

  return serviceCharge;
}
