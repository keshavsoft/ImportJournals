import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnKS_Date,LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnKS_Date,LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt});

    return LocalFromDal;
};

export {
    postDefaultFunc
};