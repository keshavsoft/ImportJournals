import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "../../../../../../Config.json" with { type: "json" };
const CommonRouteName = "Import";

let StartFunc = async () => {
    let LocaltableName = UrlJson.TableName;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `${LocaltableName}/${CommonRouteName}/BulkTransformByType`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

