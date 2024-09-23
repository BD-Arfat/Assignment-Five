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

function setActive(id) {
  document
    .getElementById("show-Donation-button")
    .classList.remove("bg-green-600", "text-white");
  document
    .getElementById("show-Donation-button")
    .classList.add("border", "border-green-600", "text-green-600");

  document
    .getElementById("show-history-button")
    .classList.remove("bg-green-600", "text-white");
  document
    .getElementById("show-history-button")
    .classList.add("border", "border-green-600", "text-green-600");

  // ক্লিক করা বাটনে active স্টাইল যোগ করে
  document
    .getElementById(id)
    .classList.remove("border", "border-green-600", "text-green-600");
  document.getElementById(id).classList.add("bg-green-600", "text-white");
}
