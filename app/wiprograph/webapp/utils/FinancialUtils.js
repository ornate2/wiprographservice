// utils/FinancialUtils.js
sap.ui.define([], function() {
    "use strict";

    return {
        generateFinancialQuarters: function(startDate, endDate) {
            const quarters = [];
            const quarterNames = ['Qtr1', 'Qtr2', 'Qtr3', 'Qtr4'];

            function getFinancialQuarter(month) {
                if (month >= 4 && month <= 6) return 0;
                if (month >= 7 && month <= 9) return 1;
                if (month >= 10 && month <= 12) return 2;
                if (month >= 1 && month <= 3) return 3;
                return -1;
            }

            const [startDay, startMonth, startYear] = startDate.split('/').map(Number);
            let currentYear = startMonth < 4 ? startYear - 1 : startYear;
            let currentQuarterIndex = getFinancialQuarter(startMonth);

            const [endDay, endMonth, endYear] = endDate.split('/').map(Number);
            let endQuarterIndex = getFinancialQuarter(endMonth);
            let endYearAdjusted = endMonth < 4 ? endYear - 1 : endYear;

            while (currentYear < endYearAdjusted || (currentYear === endYearAdjusted && currentQuarterIndex <= endQuarterIndex)) {
                const strQtr = `${quarterNames[currentQuarterIndex]}-${currentYear + 1}`;
                quarters.push(strQtr);

                currentQuarterIndex++;
                if (currentQuarterIndex === quarterNames.length) {
                    currentQuarterIndex = 0;
                    currentYear++;
                }
            }

            return quarters;
        }
    };
});