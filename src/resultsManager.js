import {dbs_multiplier} from "./products/dbs";
import {ocbc_360} from "./products/ocbc";
import {uob_one} from "./products/uob";
import {sc_bonussaver} from "./products/sc";
import {boc_smartsaver} from "./products/boc";
import {maybank_saveup} from "./products/maybank";
import {citi_maxigain} from "./products/citi";
import {cimb_fastsaver} from "./products/cimb";

export function compareProducts(income,expense,savings) {

    let results = [];

    results = results.concat(dbs_multiplier(income,expense,savings));
    results = results.concat(ocbc_360(income,expense,savings));
    results = results.concat(uob_one(income,expense,savings));
    results = results.concat(sc_bonussaver(income,expense,savings));
    results = results.concat(boc_smartsaver(income,expense,savings));
    results = results.concat(maybank_saveup(income,expense,savings));
    results = results.concat(citi_maxigain(income,expense,savings));
    results = results.concat(cimb_fastsaver(income,expense,savings));

    results.sort((a, b) => (a.interest + a.cashback > b.interest + b.cashback) ? -1 : 1);
    return results
}