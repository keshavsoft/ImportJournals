import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};