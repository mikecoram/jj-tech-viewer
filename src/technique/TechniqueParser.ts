import { Technique } from "./Technique";

export async function getTechniques() : Promise<Technique[]> {
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

function parseTsvString(tsvString : string) : Technique[] {
    const data : Technique[] = [];
    let currentId = 0;

    for (const row of tsvString.split("\n")) {
        const columns = row.split("\t");

        const parsedCol : any = {};

        for (let i = 0; i < ColumnHeaderMappings.length; i++) {
            parsedCol[ColumnHeaderMappings[i]] = columns[i];
        }

        parsedCol.id = currentId++;

        data.push(parsedCol as Technique);
    }

    return data;
}

function getTsvStringWithoutHeader(tsvString : string) {
    const firstNewLine = tsvString.indexOf("\n");
    return tsvString.substring(firstNewLine + 1);
}

function readfile(blob: Blob) : Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = e => {
            resolve(reader.result as string);
        }

        reader.onerror = e => {
            reject();
        }

        reader.readAsText(blob);
    });
}