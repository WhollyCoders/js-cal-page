"use strict";
var CalPage = {
    "data": {
        "month": ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
        "today": function () {
            return new Date();
        }
    },
    "get": {
        "currentDayOfMonth": function () {
            return CalPage.data.today().getDate();
        },
        "currentMonth": function () {
            var currentMonth = CalPage.data.today().getMonth();
            return CalPage.data.month[currentMonth];
        },
        "dayLabelElement": function () {
            return document.getElementById("day-label");
        },
        "monthLabelElement": function () {
            return document.getElementById("month-label");
        }
    }
};