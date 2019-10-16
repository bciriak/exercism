let DnaTranscriber = function () {};

let dnaKeys = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
};

DnaTranscriber.prototype.toRna = function (dna) {
    let dnaArray = dna.split('');

    let rnaArray = dnaArray.map(function (item) {
        return (dnaKeys[item] === undefined)
            ? (function () { throw new Error('Invalid input'); }())
            : dnaKeys[item];
    });
    return rnaArray.join('');
};

module.exports = DnaTranscriber;