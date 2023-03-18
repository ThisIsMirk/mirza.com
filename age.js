function updateAge() {
  const birthDate = new Date("1998-11-09");
  const now = new Date();
  const diff = now.getTime() - birthDate.getTime();
  const years = diff / 31556952000;
  const age = years.toFixed(9);

  document.getElementById("age").textContent = age;
}

setInterval(updateAge, 100);
