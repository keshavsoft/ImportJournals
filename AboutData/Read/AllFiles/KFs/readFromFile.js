import fs from "fs";
import path from "path";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = () => {
    let LocalReturnData = { KTF: false };

    const fileNames = LocalFuncReturnFiles();

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = fileNames;

    return LocalReturnData;
};

const LocalFuncReturnFiles = () => {
    try {
        const LocalDataPath = ParamsJson.DataPath;
        const files = fs.readdirSync(LocalDataPath);

        const fileNames = files.filter(file => {
            return fs.statSync(path.join(LocalDataPath, file)).isFile();
        });

        return fileNames;
    } catch (err) {
        console.error('Error reading directory:', err);
    }
};

export { StartFunc };
