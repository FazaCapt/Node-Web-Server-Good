Silabus:
1. Section Intro 1:07
2. Hello Express 16:51
3. Creating a Web Server 7:12
4. Rendering Templates with Data 13:53
5. Advanced Templating 13:37
6. Express Middleware 16:13
7. Adding Version Control (Git) 12:31
8. Setting Up GitHub & SSH Keys 13:29 'https://help.github.com/articles/connecting-to-github-with-ssh/'
9. Deploying Your Apps 15:07
10. Adding a New Feature and Deploying 

Install:
1. npm install express@4.15.2 --save 'https://www.npmjs.com/package/express'
2. npm install hbs@4.0.1 --save 'https://www.npmjs.com/package/hbs'
3. install cli Heroku 'https://devcenter.heroku.com/articles/heroku-cli' (toolbelt.heroku.com)



#Cara Kerjanya:
    - Lihat di Browser => developer tools => network => localhost => Header

Heroku:
    1. heroku login
    2. heroku keys:add
    3. heroku keys
    4. heroku remove (options)
    5. env (bila mau liat options)
    6. Buat 'const port = process.env.PORT || 3000' di server
    7. buat 'npm start' di Package.json dengan 'node server.js'
    8. heroku create
    9. git push heroku
    10. heroku open
    11. 'https://dry-fortress-28443.herokuapp.com/'
        
Catatan / Penjelasan: 

    Membuat Web Server dengan NodeJS

1. Express 'https://expressjs.com/'
    - Express.js adalah satu web framework paling populer di dunia Node.js. 
    - Dokumentasinya yang lengkap dan penggunaannya yang cukup mudah, dapat membuat kita mengembangkan berbagai produk seperti aplikasi web ataupun RESTful API. 
    - Express.js pun dapat digunakan menjadi pijakan untuk membangun web framework yang lebih kompleks seperti, Sails.js, MEAN (MongoDB, Express.js, Angular.js, Node.js) dan MERN (MongoDB, Express.js, React.js, Node.js). 
    - Express.js dibuat oleh TJ Holowaychuk dan sekarang dikelola oleh komunitas.
2. keunggulan Express.js:
    - Dukungan pembuatan middleware
    - Dukungan terhadap berbagai HTTP verb seperti POST, GET, PUT, DELETE, OPTION, HEAD, dan lainnya
    - Sudah terpasang template engine Jade
    - manajemen file statik seperti CSS dan Javascript
    - Sangat bebas untuk dikostumisasi
3. Struktur Folder Express.js
    - bin
        di dalamnya terdapat sebuah file yang bernama www dimana file tersebut akan dieksekusi saat menjalankan perintah "npm start"
    - node_modules
        di dalamnya terdapat berbagai folder library - library Node.js yang dipasang melalui node package manager atau NPM
    - public
        kita dapat menaruh berbagai file CSS, Javascript, atau gambar di dalam folder ini.
    - routes
        - di dalamnya terdapat berbagai file yang berisi action yang diterima oleh routing yang kita definisikan. 
        - Dapat menerima request berupa GET, POST, PUT, DELETE, OPTION, dan HEAD
    - views
        di dalamnya terdapat berbagai file jade atau html yang digunakan oleh routes untuk menampilkan halaman
    - app.js
        file utama Express.js yang berisi penggunaan package utama dan konfigurasi utama
    - npm-debug.log 
        file yang berisi hasil debug atau error yang dicatat oleh Express.js selama running
    - package.json 
        - berisi struktur JSON yang mendefinisikan profil proyek dan dependensi paket apa saja yang dibutuhkan aplikasi yang kita kembangkan. 
        - NPM akan melacak dependensi dengan melihat file ini
4. handlebars.js 'http://handlebarsjs.com/'
    - Handlebars menyediakan kekuatan yang diperlukan untuk membiarkan Anda membuat template semantik secara efektif tanpa frustrasi.
    - Handlebars sebagian besar kompatibel dengan template mustache. 
    - Dalam kebanyakan kasus, mungkin untuk menukar mustache dengan setang dan terus menggunakan template Anda saat ini. 
5. Request, Response, Next (Express Middlewere)
    - Bila ingin melihat methode dll ada disini 'http://expressjs.com/en/4x/api.html#req'
