import {dbs_everyday} from "./products/dbs";
import {ocbc_everyday} from "./products/ocbc";

export function compareProducts(income,expense,savings) {

    let results = [];

    results = results.concat(dbs_everyday(income,expense,savings));
    results = results.concat(ocbc_everyday(income,expense,savings));

    results.sort((a, b) => (a.interest + a.cashback > b.interest + b.cashback) ? -1 : 1);
    return results
}