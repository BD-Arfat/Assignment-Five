// input function
function getInputAddMoney(id) {
  const getInputValue = document.getElementById(id).value;
  const getInputNumber = parseFloat(getInputValue);
  return getInputNumber;
}

function getInnerTextValue(id) {
  const getTextValue = document.getElementById(id).innerText;
  const getTextNumber = parseFloat(getTextValue);
  return getTextNumber;
}

function getShowContent(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function setActive(buttonId) {
  document
    .getElementById("show-Donation-button")
    .classList.remove("bg-green-800");
  document
    .getElementById("show-history-button")
    .classList.remove("bg-green-800");
  document.getElementById("show-Donation-button").classList.add("bg-gray-600");
  document.getElementById("show-history-button").classList.add("bg-gray-600");
  document.getElementById(buttonId).classList.remove("bg-gray-600");
  document.getElementById(buttonId).classList.add("bg-green-800");
}
