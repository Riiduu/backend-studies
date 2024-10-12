const fs = require('fs')
const http = require('http')

/////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
    res.end('Hello from the server')
});

// uses 2 parameters. 1 - port, 2 - ip
server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000");
})







/////////////////////////////
// READING AND WRITING FILES

// Async behaviour
// reads the file specified in the first parameter, and then runs the callback
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     // reads a file using the result of the previous function as the file name.
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         // error checking using try, catch
//         try {
//             // logs the result from the read
//             console.log(data2)
//             // reads another file
//             fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//                 // writes the results from the 2nd and 3rd (last) read into a file and logs "The file has been written", once done
//                 fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//                     console.log("The file has been written")
//                 })
//             })
//         } catch {
//             console.log(err)
//         }
//     })
// })

// blocking/synchronous way
// const input = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(input)

// const output = `This is what we know about avocados: ${input}\n Created ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', output);
// console.log('File written.')