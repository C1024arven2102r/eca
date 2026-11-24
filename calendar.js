
function selectDay(element) {

    const allDays = document.querySelectorAll(".date");

    allDays.forEach(day => {
        day.style.backgroundColor = "white";
        day.style.color = "#172B4D";
    });

    element.style.backgroundColor = "#172B4D";
    element.style.color = "white";

    const selectedDate = document.getElementById("selected-date");

    selectedDate.textContent = "روز انتخاب‌شده: " + element.textContent;

    console.log("Selected day:", element.textContent);
}
