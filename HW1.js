// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
const fs = require(`fs`)
const path = require(`path`)

fs.mkdir(path.join(__dirname,`main`,), err => {
    if (err)
        console.log(err)
})
fs.mkdir(path.join(__dirname,`main`, `online`), err => {
    if (err)
        console.log(err)
})
fs.mkdir(path.join(__dirname,`main`, `inPerson`), err => {
    if (err)
        console.log(err)
})
let onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv" },
    {name: "Stepan", age: 24, city: "Lviv" }
    ]
let inPersonUsers = [
    {name: "Oleg", age: 19, city: "Kyiv" },
    {name: "Maks", age: 25, city: "Odessa" }
];
for (let i = 0; i < inPersonUsers.length; i++) {
    for (const inPersonUser in inPersonUsers[i]) {
        fs.writeFile(path.join(__dirname, `main`, `InPerson`, `InPerson.txt`),
        `${inPersonUser} - ${inPersonUsers[i][inPersonUser]}\n`,
            {flag: 'a'},
            err => {
                if (err)
                    console.log(err);}
        )
    }

}
for (let i = 0; i < onlineUsers.length; i++) {
    for (const online in onlineUsers[i]) {
        fs.writeFile(path.join(__dirname, `main`, `online`, `online.txt`),
            `${online} - ${onlineUsers[i][online]}\n`,
            {flag: 'a'},
            err => {
                if (err)
                    console.log(err);}
        )
    }
}

let exchange = () => {
    fs.readFile(path.join(__dirname, `main`, `InPerson`, `InPerson.txt`), (err, data1) => {
        if (err) {
            console.log(err)
            throw err

        }
        fs.readFile(path.join(__dirname, `main`, `online`, `online.txt`), (err, data2) => {
            if (err) {
                console.log(err)
                throw err


            }
            fs.writeFile(path.join(__dirname, `main`, `InPerson`, `InPerson.txt`), data2, err => {
                if (err) {
                    console.log(err)
                    throw err

                }
                fs.writeFile(path.join(__dirname, `main`, `online`, `online.txt`), data1, err => {
                    if (err) {
                        console.log(err)
                        throw err

                    }
                });
            });
        });
    });
}
exchange();
