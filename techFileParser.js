
async function getTechniques() {
    const tsvResponse = await fetch("https://mikecoram.github.io/jj-tech-viewer/techs.tsv");
    const tsvString = await readfile(await tsvResponse.blob())
    return parseTsvString(getTsvStringWithoutHeader(tsvString));
}

const ColumnHeaderMappings = [
    "videoType",
    "startingPosition",
    "techniqueType",
    "techniqueName",
    "videoUrl",
    "tags",
    "fighterA",
    "fighterB",
    "gifLink",
];

function parseTsvString(tsvString) {
    let data = [];

    for (let row of tsvString.split("\n")) {
        let columns = row.split("\t");

        let parsedCol = {};

        for (let i = 0; i < ColumnHeaderMappings.length; i++) {
            parsedCol[ColumnHeaderMappings[i]] = columns[i];
        }

        data.push(parsedCol);
    }

    return data;
}

function getTsvStringWithoutHeader(tsvString) {
    const firstNewLine = tsvString.indexOf("\n");
    return tsvString.substring(firstNewLine + 1);
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