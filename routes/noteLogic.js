const noteFile = require('express').Router;
const fs = require('fs');
// assign random id to new notes
const { v4:uuidv4 } = require('uuid');

// read previous notes and print on page
noteFile.get('/', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        err ? console.log(err) : res.json(JSON.parse.data)
    })
})

// read previous notes and append new note to db
noteFile.post('/', (req, res) => {
    const request = req.body
    const { title, text } = req.body;

    if (!request)   {
        console.log('there was an error sending the note.')
    }
    else    {
        const createNew = {
            title,
            text,
            id: uuidv4()
        }
        // read the file and write the new note to it
        fs.readFile('../db/db.json', (err, data) => {
            if (err) {
                throw err
            }
            else {
                // parse the data so that it can be added to
                // add the new note to it
                // stringify the updated note file
                const parsedData = JSON.parse(data);
                const newParsed = parsedData.push(createNew);
                const stringifiedNew = JSON.stringify(newParsed);

                // now write it all into the new file
                fs.writeFile('../db/db/json', stringifiedNew, (err) => {
                    if (err)    {
                        throw err
                    }
                    else {
                        // then print the updated file to the page
                        fs.readFile('../db/db/json', (err, data) =>   {
                        err ? console.log(err) : res.json(JSON.parse(data)) }
                        )
                    }
                })
            }
        })
    }
})

module.exports = noteFile;