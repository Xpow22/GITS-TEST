function calculateWeights(s) {
    const weights = new Set();
    const n = s.length;
    let i = 0;

    while (i < n) {
        let weight = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        weights.add(weight);

        let j = i + 1;
        while (j < n && s[j] === s[i]) {
            weight += s.charCodeAt(j) - 'a'.charCodeAt(0) + 1;
            weights.add(weight);
            j += 1;
        }

        i = j;
    }

    return weights;
}

function weightedStrings(string, queries) {
    const weights = calculateWeights(string);
    const result = [];

    for (const query of queries) {
        if (weights.has(query)) {
            result.push("Yes");
        } else {
            result.push("No");
        }
    }

    return result;
}

const string = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(string, queries)); 
