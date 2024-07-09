## Soal no.1 Weighted Strings

### Solusi

Untuk menyelesaikan masalah Weighted Strings, kita perlu menghitung bobot dari setiap karakter dan substring dalam string yang diberikan. Bobot ini ditentukan berdasarkan posisi ordinal dalam abjad, di mana 'a' memiliki bobot 1, 'b' memiliki bobot 2, ..., 'z' memiliki bobot 26. Setelah menghitung bobot, kita memeriksa apakah setiap query cocok dengan bobot karakter atau substring dalam string.


1. **Apa itu Bobot Karakter dan Substring?**
   - Bobot karakter adalah nilai numerik yang diberikan pada setiap huruf dalam abjad berdasarkan posisinya.
   - Bobot substring adalah nilai yang dihitung dari jumlah bobot karakter yang membentuk substring tertentu dalam string.

2. **Langkah-langkah Solusi**:
   - **Langkah 1**: Hitung bobot setiap karakter dan substring dalam string menggunakan pendekatan iteratif.
   - **Langkah 2**: Simpan hasil bobot dalam sebuah himpunan (set) untuk menghindari duplikasi dan mempercepat pencarian.
   - **Langkah 3**: Untuk setiap query, periksa apakah nilai query cocok dengan salah satu bobot dalam himpunan.
   - **Langkah 4**: Jika cocok, tambahkan "Yes" ke hasil; jika tidak cocok, tambahkan "No".

### Kompleksitas

- **Kompleksitas Waktu**: O(n + m)
  - n adalah panjang string dan m adalah jumlah query.
  - Iterasi melalui string untuk menghitung bobot memerlukan O(n).
  - Memeriksa setiap query melawan himpunan bobot memerlukan rata-rata O(1) dengan menggunakan struktur data set.
  - Jadi, keseluruhan kompleksitas waktunya adalah O(n + m).

- **Kompleksitas Ruang**: O(n)
  - Ruang tambahan yang digunakan terutama untuk menyimpan himpunan bobot karakter dan substring yang dihitung.
  - Jumlahnya sebanding dengan jumlah karakter dalam string, sehingga kompleksitas ruangnya adalah O(n).

### Contoh Penggunaan

```javascript
console.log(weightedStrings("abbcccd", [1, 3, 9, 8])); // Output: ["Yes", "Yes", "Yes", "No"]
console.log(weightedStrings("gits", [7, 9, 20, 19])); // Output: ["Yes", "Yes", "Yes", "Yes"]
```

## Soal no.2 Balanced Bracket 

### Solusi

Untuk menentukan apakah string tanda kurung seimbang, kita menggunakan pendekatan berbasis tumpukan (stack).

1. **Apa itu Tumpukan (Stack)?**
   - Tumpukan adalah struktur data yang bekerja seperti tumpukan piring. Kita bisa menambahkan piring di atas tumpukan (push) dan mengambil piring teratas (pop).

2. **Langkah-langkah Solusi**:
   - **Langkah 1**: Buat tumpukan kosong untuk menyimpan tanda kurung buka.
   - **Langkah 2**: Periksa setiap karakter dalam string satu per satu.
   - **Langkah 3**: Jika karakter adalah tanda kurung buka seperti `(`, `[`, `{`, tambahkan ke dalam tumpukan.
   - **Langkah 4**: Jika karakter adalah tanda kurung tutup seperti `)`, `]`, `}`, periksa apakah sesuai dengan tanda kurung buka yang ada di atas tumpukan:
     - Jika sesuai, keluarkan tanda kurung buka dari tumpukan.
     - Jika tidak sesuai atau tumpukan kosong, string tidak seimbang.
   - **Langkah 5**: Setelah memeriksa seluruh string, cek apakah tumpukan kosong. Jika kosong, string seimbang; jika tidak, string tidak seimbang.

### Kompleksitas

1. **Kompleksitas Waktu**: \(O(n)\)
   - Fungsi ini memeriksa setiap karakter dalam string sekali saja.
   - Setiap operasi pada tumpukan (push dan pop) membutuhkan waktu konstan, \(O(1)\).
   - Jadi, keseluruhan kompleksitas waktunya adalah \(O(n)\), di mana \(n\) adalah panjang string.

2. **Kompleksitas Ruang**: \(O(n)\)
   - Kompleksitas ruang ditentukan oleh ukuran tumpukan, yang dalam kasus terburuk dapat menyimpan semua tanda kurung buka.
   - Jadi, ukuran tumpukan sebanding dengan jumlah karakter dalam string, \(O(n)\).

### Contoh Penggunaan

```javascript
console.log(isBalanced("{ [ ( ) ] }")); // Output: YES
console.log(isBalanced("{ [ ( ] ) }")); // Output: NO
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")); // Output: YES
```

## Soal no.3 Highest Palindrome 

### Solusi

Untuk menentukan palindrom tertinggi yang mungkin dari sebuah string yang mewakili angka dengan mengubah maksimal 'k' digit, kita dapat menggunakan pendekatan rekursif.


1. **Apa itu Palindrom?**
   - Palindrom adalah sebuah angka atau teks yang dibaca sama dari depan dan belakang. Contoh: 121, 454, "aba".

2. **Langkah-langkah Solusi**:
   - **Langkah 1**: Periksa setiap pasangan digit dari awal dan akhir ke tengah.
   - **Langkah 2**: Jika digit sama, tidak perlu mengubah.
   - **Langkah 3**: Jika digit berbeda, ubah digit yang lebih kecil menjadi digit yang lebih besar.
   - **Langkah 4**: Jika sudah menjadi palindrom, maksimalkan angka dengan mengubah digit menjadi '9' jika masih ada sisa perubahan.

### Kompleksitas

1. **Kompleksitas Waktu**: \(O(n)\)
   - Fungsi ini memeriksa setiap pasangan digit dalam string satu kali.
   - Jadi, keseluruhan kompleksitas waktunya adalah \(O(n)\), di mana \(n\) adalah panjang string.

2. **Kompleksitas Ruang**: \(O(n)\)
   - Kompleksitas ruang ditentukan oleh ukuran string yang diubah.

### Contoh Penggunaan

```javascript
console.log(highestPalindrome("3943", 1)); // Output: 3993
console.log(highestPalindrome("932239", 2)); // Output: 992299
```
