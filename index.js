
(async () => {
    const techniques = await getTechniques();

    for (let tech of techniques) {
        let rowHtml = "";

        for (let col in tech) {
            rowHtml += `<td>${tech[col]}</td>`;
        }

        let newRow = 
            `<tr>
                ${rowHtml}
            </tr>`;

        document.getElementById("tech-list").innerHTML += newRow;
    }

})();