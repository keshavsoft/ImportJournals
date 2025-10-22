import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnKS_Date,LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnKS_Date,LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};