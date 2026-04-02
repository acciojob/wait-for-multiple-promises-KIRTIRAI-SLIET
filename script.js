//your JS code here. If required.
const tbody = document.getElementById("output");

function createPromise() {
  const delay = Math.random() * 2000 + 1000;
  return new Promise((resolve) => {
    const start = performance.now();

    setTimeout(() => {
      const end = performance.now();
      const timeTaken = ((end - start) / 1000).toFixed(3);
      resolve(timeTaken);
    }, delay);
  });
}

const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

const startAll = performance.now();

Promise.all([p1, p2, p3]).then((times) => {
  const endAll = performance.now();
  const totalTime = ((endAll - startAll) / 1000).toFixed(3);

  tbody.innerHTML = "";

  times.forEach((time, index) => {
    const row = document.createElement("tr");

    const col1 = document.createElement("td");
    col1.textContent = `Promise ${index + 1}`;

    const col2 = document.createElement("td");
    col2.textContent = time;

    row.appendChild(col1);
    row.appendChild(col2);

    tbody.appendChild(row);
  });

  const totalRow = document.createElement("tr");

  const totalCol1 = document.createElement("td");
  totalCol1.textContent = "Total";

  const totalCol2 = document.createElement("td");
  totalCol2.textContent = totalTime;

  totalRow.appendChild(totalCol1);
  totalRow.appendChild(totalCol2);

  tbody.appendChild(totalRow);
});

tbody.innerHTML = ""; // removes loading row