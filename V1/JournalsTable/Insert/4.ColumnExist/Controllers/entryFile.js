import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnDepositAmt = LocalRequestBody.DepositAmt;
	let LocalCoumnWithdrawalAmt = LocalRequestBody.WithdrawalAmt;
	let LocalCoumnValueDt = LocalRequestBody.ValueDt;
	let LocalCoumnChqRefNo = LocalRequestBody.ChqRefNo;
	let LocalCoumnNarration = LocalRequestBody.Narration;
	let LocalCoumnDate = LocalRequestBody.Date;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnDate,LocalCoumnNarration,LocalCoumnChqRefNo,LocalCoumnValueDt,LocalCoumnWithdrawalAmt,LocalCoumnDepositAmt});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};