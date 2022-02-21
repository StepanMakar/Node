// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const fs = require(`fs`);
const path = require(`path`);
fs.mkdir(path.join(__dirname,`CW1`), err => {
    if (err)
        console.log(err);
})
const way = (__dirname, `CW1`);

fs.writeFile(path.join(way, `FirstFile.txt`), `Some Info About something`, err => {
    if (err)
        console.log(err);
});
fs.writeFile(path.join(way, `SecondFile.txt`),` `, err => {
    if (err)
        console.log(err);
});

fs.readFile(path.join(way, `FirstFile.txt`),(err, data1) => {
    if (err) {
        console.log(err)
        throw err}
    fs.writeFile(path.join(way, `SecondFile.txt`), data1 , err => {
        if (err) {
            console.log(err);
            throw err

        };

    });
});
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
fs.writeFile(path.join(way, `task2.txt`), `Bla Bla Bla Bla Bla etc.`, err => {
    if (err) {
        console.log(err)
    }
});
fs.mkdir(path.join(way, `Task2`), err=> {
    if (err) {
        console.log(err);
    }
});
fs.writeFile(path.join(way, `Task2`, `task2_info.txt`), ` `, err=>{
    if (err) {
        console.log(err);
    }
});
fs.readFile(path.join(way, `task2.txt`),  (err, inverse) => {
    if (err) {
        console.log(err);
        throw err
    }
fs.writeFile(path.join(way,`Task2`,`task2_info.txt`), inverse, err1 => {
    if (err1) {
        console.log(err1);
        throw err
    }
    fs.unlink(path.join(way, `task2.txt`), err2 => {
        if (err2) {
            console.log(err2);
            throw err2
        }

    });

      });

        });

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new
fs.mkdir(path.join(way,`Task3`, `ToDelete`), err => {
    if (err){
        console.log(err)
    }
});
fs.writeFile(path.join(way, `Task3`, `File3_1.txt`), `Some Data`, err => {
    if (err) {
        console.log(err)
    }
});
fs.writeFile(path.join(way, `Task3`, `File3_2.txt`), `Okten School`, err => {
    if (err) {
        console.log(err)
    }
});

const resolve3 = () => {

    fs.readdir(path.join(way, `Task3`), (err, files) => {
        if (err) {
            console.log(err)
        }
        for (let i = 0; i < files.length; i++) {
            const DataElement = files[i];
            fs.stat(path.join(way, `Task3`, DataElement), (err, inf) => {
                if (err) {
                    console.log(err)
                    throw err
                }
                if (inf.isFile()) {
                    fs.truncate(path.join(way, `Task3`, DataElement), err1 => {
                        if (err) {
                            console.log(err1)
                            throw err1
                        }

                    });
                }
                if (inf.isDirectory()) {
                    fs.rename(path.join(way, `Task3`, DataElement), path.join(way, `Task3`, DataElement + `_new`),
                        err1 => {
                            if (err1) {
                                console.log(err1)
                                throw err1
                            }
                        });
                }
            });

        }
    });
};
resolve3();
