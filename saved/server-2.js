// Creating a Web Server 7:12

const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Faza!</h1>');
    res.send({
        name: 'Faza',
        likes: [
            'sepede',
            'Berenang',
            'Belajar'
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello About Route Page!</h1>');
})

//send Back ErrorMessage JSON
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle Request'
    });
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

//Penjelasan:
// Perbedaan app.use dan app.get:
// App.use() :
// ditujukan untuk middleware yang mengikat ke aplikasi Anda. 
// Jalannya adalah jalur "mount" atau "awalan" dan membatasi middleware untuk hanya berlaku untuk setiap jalur yang diminta yang dimulai dengan itu. 
// Bahkan bisa digunakan untuk menanamkan aplikasi lain:

// Dengan menentukan / sebagai jalur "mount", app.use() akan menanggapi setiap jalur yang dimulai dengan / , yang semuanya adalah mereka dan terlepas dari kata kerja HTTP yang digunakan:

// GET/
// PUT/foo
// POST/foo/bar
// Dll.

// App.get()
// di sisi lain, adalah bagian dari perutean aplikasi Express 'dan ditujukan untuk mencocokkan dan menangani rute tertentu saat diminta dengan kata kerja GET HTTP:
// GET/
// Dan, perutean setara untuk contoh app.use() Anda sebenarnya adalah:
// App.all(/^\/.*/, fungsi(req, res) {
//     Res.send('Halo');
// });

// App.use adalah metode "tingkat rendah"
// dari Connect, kerangka middleware yang bergantung pada Express.

// Inilah pedoman saya:

// Gunakan app.get jika Anda ingin mengekspos metode GET.
// Gunakan app.use jika Anda ingin menambahkan beberapa middleware(handler untuk permintaan HTTP sebelum sampai ke rute yang telah Anda atur di Express), atau jika Anda ingin membuat rute Anda modular(misalnya, tampilkan Set rute dari modul npm yang bisa digunakan aplikasi web lain).

// Tapi jika saya tidak peduli dengan metode ini, saya bisa menggunakan app.use untuk menangani beberapa rute ? Atau kita tidak boleh menggunakan app.use untuk routing.
// Anda bisa menggunakan app.use untuk memindahkan rute Anda ke file terpisah.Users.js, buildings.js 
// App.get dipanggil saat metode HTTP disetel ke GET, sedangkan app.use dipanggil terlepas dari metode HTTP, dan oleh karena itu mendefinisikan lapisan yang ada di atas semua tipe RESTful lainnya yang paket ekspres memberi Anda akses.
// Cukup app.use berarti "Jalankan ini pada SEMUA permintaan"