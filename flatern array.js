const ar = [];
function flatten(a) {
    for (var i = 0; i < a.length; i++) {
        if(Number.isInteger(a[i]) ||typeof a[i] == "string"){
            ar.push(a[i]);
        }

        if(Array.isArray(a[i])) {
            flatten(a[i]);
        }
    }
}

const arr = flatten([1, [2], [3, [[4]]],[5,6]]);
console.log(ar);