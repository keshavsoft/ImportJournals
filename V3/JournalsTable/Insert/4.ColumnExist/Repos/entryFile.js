import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt});

    return LocalFromDal;
};

export {
    postDefaultFunc
};