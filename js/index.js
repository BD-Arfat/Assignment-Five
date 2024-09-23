document.getElementById("add-amount").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAddMoney = getInputAddMoney("inputAddMoney");
  const mainBalance = getInnerTextValue("mainBalance");
  const myAddAmount = getInnerTextValue("your-add-amount");
  const myTotalAddAmount = myAddAmount + inputAddMoney;
  const balance = mainBalance - inputAddMoney;
  document.getElementById("mainBalance").innerText = balance;
  document.getElementById("your-add-amount").innerText = myTotalAddAmount;
  // history section start
  const heading = document.getElementById("heading").innerText;
  const newDate = new Date();
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='border border-gray-400 rounded-lg mt-4 p-4'>
  <h1 class='font-bold text-xl'>${inputAddMoney} Taka is Donated for ${heading} </h1>
  <p>Date : ${newDate}</p>
  </div>
  `;
  document.getElementById("history-div-container").appendChild(div);
});

document.getElementById("add-amount-2").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAddMoney = getInputAddMoney("inputAddMoney-2");
  const mainBalance = getInnerTextValue("mainBalance");
  const myAddAmount = getInnerTextValue("your-add-amount-2");
  const myTotalAddAmount = myAddAmount + inputAddMoney;
  const balance = mainBalance - inputAddMoney;
  document.getElementById("mainBalance").innerText = balance;
  document.getElementById("your-add-amount-2").innerText = myTotalAddAmount;
  // history section start
  const heading = document.getElementById("heading-2").innerText;
  const newDate = new Date();
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='border border-gray-400 rounded-lg mt-4 p-4'>
  <h1 class='font-bold text-xl'>${inputAddMoney} Taka is Donated for ${heading} </h1>
  <p>Date : ${newDate}</p>
  </div>
  `;
  document.getElementById("history-div-container").appendChild(div);
  // history section end
});

document.getElementById("add-amount-3").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAddMoney = getInputAddMoney("inputAddMoney-3");
  const mainBalance = getInnerTextValue("mainBalance");
  const myAddAmount = getInnerTextValue("your-add-amount-3");
  const myTotalAddAmount = myAddAmount + inputAddMoney;
  const balance = mainBalance - inputAddMoney;
  document.getElementById("mainBalance").innerText = balance;
  document.getElementById("your-add-amount-3").innerText = myTotalAddAmount;
  // history section start
  const heading = document.getElementById("heading-3").innerText;
  const newDate = new Date();
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='border border-gray-400 rounded-lg mt-4 p-4'>
  <h1 class='font-bold text-xl'>${inputAddMoney} Taka is Donated for ${heading} </h1>
  <p>Date : ${newDate}</p>
  </div>
  `;
  document.getElementById("history-div-container").appendChild(div);
});
