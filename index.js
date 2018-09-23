
(async () => {

    const csvResponse = await fetch("https://mikecoram.github.io/jj-tech-viewer/techs.csv");
    
    const csvString = await readfile(await csvResponse.blob())

    parseCsvString(csvString);
})();

function parseCsvString(csvString) {
    for (let line of csvString.split("\n")) {
        for (let column of line.split(",")) {
            let cleanColumn = column.replace("\"", "");
            console.log(cleanColumn)
        }
    }
}

function readfile(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = e => {
            resolve(reader.result);
        }

        reader.onerror = e => {
            reject();
        }

        reader.readAsText(blob);
    });
}