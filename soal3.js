function highestPalindrome(s, k) {
    let arr = s.split('');
    let l = 0;
    let r = arr.length - 1; 
    let changes = 0;

    while (l < r) {
        if (arr[l] !== arr[r]) {
            arr[l] = arr[r] = Math.max(arr[l], arr[r]);
            changes++;
        }
        l++;
        r--; 
    }

    let remainingChanges = k - changes;

    if (remainingChanges < 0) {
        return '-1';
    }
    l = 0;
    r = arr.length - 1;

    while (l <= r) {
        if (l === r) { 
            if (remainingChanges > 0) {
                arr[l] = '9';
            }
        } else if (arr[l] !== '9') {
            if (remainingChanges >= 2 && arr[l] === s[l] && arr[r] === s[r]) {
                remainingChanges -= 2;
                arr[l] = arr[r] = '9';
            } else if (remainingChanges >= 1 && (arr[l] !== s[l] || arr[r] !== s[r])) {
                remainingChanges--;
                arr[l] = arr[r] = '9';
            }
        }
        l++;
        r--;
    }

    return arr.join('');
}

console.log(highestPalindrome("3943", 1)); 
console.log(highestPalindrome("932239", 2)); 
