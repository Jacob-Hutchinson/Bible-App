require("dotenv").config();

const { default: axios } = require("axios");

const { KEY, KJV} = process.env

module.exports = {
    getChapter: (req, res) => {
        // console.log('hit server')
        //have to use postman to turn cURL into a config to use with axios
        let config = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config)
          .then(dbres => {
            const bookID = dbres.data.data[((Math.random() * 66)  | 0)].id
            // console.log(dbres.data.data[((Math.random() * 66) | 0)])
            let config1 = {
                method: 'get',
                url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books/${bookID}/chapters`,
                headers: { 
                  'accept': 'application/json', 
                  'api-key': `${KEY}`
                }
              };

              axios(config1)
              .then(dbres1 => {
                // console.log(dbres1.data)
                let randomChapter = ((Math.random() * dbres1.data.data.length -1) + 1 | 0)
                if(randomChapter === 0){
                    randomChapter += 1
                }
                const chapter = dbres1.data.data[randomChapter]
                
                let config2 = {
                    method: 'get',
                    url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${chapter.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
                    headers: { 
                      'accept': 'application/json', 
                      'api-key': `${KEY}`
                    }
                  };

                  axios(config2)
                  .then(dbres2 => {
                    // console.log(dbres2.data)
                    res.status(200).send(dbres2.data)
                  }).catch(err => console.log(err))
              }).catch(err => console.log(err))
          }).catch(err => console.log(err))
    },
    getOldTestament: (req,res) => {
        let config = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config)
          .then(dbres => {
            const bookID = dbres.data.data[((Math.random() * 39)  | 0)].id
            // console.log(dbres.data.data[((Math.random() * 66) | 0)])
            let config1 = {
                method: 'get',
                url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books/${bookID}/chapters`,
                headers: { 
                  'accept': 'application/json', 
                  'api-key': `${KEY}`
                }
              };

              axios(config1)
              .then(dbres1 => {
                // console.log(dbres1.data)
                let randomChapter = ((Math.random() * dbres1.data.data.length -1) + 1 | 0)
                if(randomChapter === 0){
                    randomChapter += 1
                }
                const chapter = dbres1.data.data[randomChapter]
                
                let config2 = {
                    method: 'get',
                    url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${chapter.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
                    headers: { 
                      'accept': 'application/json', 
                      'api-key': `${KEY}`
                    }
                  };

                  axios(config2)
                  .then(dbres2 => {
                    // console.log(dbres2.data)
                    res.status(200).send(dbres2.data)
                  }).catch(err => console.log(err))
              }).catch(err => console.log(err))
          }).catch(err => console.log(err))
    },
    getNewTestament: (req,res) => {
        let config = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config)
          .then(dbres => {
            const bookID = dbres.data.data[((Math.random() * 27) + 39 | 0)].id
            // console.log(dbres.data.data[((Math.random() * 66) | 0)])
            let config1 = {
                method: 'get',
                url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books/${bookID}/chapters`,
                headers: { 
                  'accept': 'application/json', 
                  'api-key': `${KEY}`
                }
              };

              axios(config1)
              .then(dbres1 => {
                // console.log(dbres1.data)
                let randomChapter = ((Math.random() * dbres1.data.data.length -1) + 1 | 0)
                if(randomChapter === 0){
                    randomChapter += 1
                }
                const chapter = dbres1.data.data[randomChapter]
                
                let config2 = {
                    method: 'get',
                    url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${chapter.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
                    headers: { 
                      'accept': 'application/json', 
                      'api-key': `${KEY}`
                    }
                  };

                  axios(config2)
                  .then(dbres2 => {
                    // console.log(dbres2.data)
                    res.status(200).send(dbres2.data)
                  }).catch(err => console.log(err))
              }).catch(err => console.log(err))
          }).catch(err => console.log(err))
    },

    getPsalms: (req, res) => {
        let config1 = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books/PSA/chapters`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config1)
          .then(dbres1 => {
            // console.log(dbres1.data)
            let randomChapter = ((Math.random() * dbres1.data.data.length -1) + 1 | 0)
            if(randomChapter === 0){
                randomChapter += 1
            }
            const chapter = dbres1.data.data[randomChapter]
            
            let config2 = {
                method: 'get',
                url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${chapter.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
                headers: { 
                  'accept': 'application/json', 
                  'api-key': `${KEY}`
                }
              };

              axios(config2)
              .then(dbres2 => {
                // console.log(dbres2.data)
                res.status(200).send(dbres2.data)
              }).catch(err => console.log(err))
          }).catch(err => console.log(err))
    },
    getWisdom: (req, res) => {
        const wisdom = ['JOB', 'PRO', 'ECC']
        const random = ((Math.random() * 3) | 0)

        let config1 = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books/${wisdom[random]}/chapters`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config1)
          .then(dbres1 => {
            // console.log(dbres1.data)
            let randomChapter = ((Math.random() * dbres1.data.data.length -1) + 1 | 0)
            if(randomChapter === 0){
                randomChapter += 1
            }
            const chapter = dbres1.data.data[randomChapter]
            
            let config2 = {
                method: 'get',
                url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${chapter.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
                headers: { 
                  'accept': 'application/json', 
                  'api-key': `${KEY}`
                }
              };

              axios(config2)
              .then(dbres2 => {
                // console.log(dbres2.data)
                res.status(200).send(dbres2.data)
              }).catch(err => console.log(err))
          }).catch(err => console.log(err))
    },
    getGospel: (req, res) => {
        const wisdom = ['MAT', 'MRK', 'LUK', 'JHN']
        const random = ((Math.random() * 4) | 0)

        let config1 = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/books/${wisdom[random]}/chapters`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config1)
          .then(dbres1 => {
            // console.log(dbres1.data)
            let randomChapter = ((Math.random() * dbres1.data.data.length -1) + 1 | 0)
            if(randomChapter === 0){
                randomChapter += 1
            }
            const chapter = dbres1.data.data[randomChapter]
            
            let config2 = {
                method: 'get',
                url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${chapter.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
                headers: { 
                  'accept': 'application/json', 
                  'api-key': `${KEY}`
                }
              };

              axios(config2)
              .then(dbres2 => {
                // console.log(dbres2.data)
                res.status(200).send(dbres2.data)
              }).catch(err => console.log(err))
          }).catch(err => console.log(err))
    },
    getPrevious: (req, res) => {
        console.log(req.body)
        const {previous} = req.body

        let config2 = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${previous.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config2)
          .then(dbres2 => {
            // console.log(dbres2.data)
            res.status(200).send(dbres2.data)
          }).catch(err => console.log(err))
    },
    getNext: (req, res) => {
        console.log(req.body)
        const {next} = req.body
        let config2 = {
            method: 'get',
            url: `https://api.scripture.api.bible/v1/bibles/${KJV}/chapters/${next.id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
            headers: { 
              'accept': 'application/json', 
              'api-key': `${KEY}`
            }
          };

          axios(config2)
          .then(dbres2 => {
            // console.log(dbres2.data)
            res.status(200).send(dbres2.data)
          }).catch(err => console.log(err))
    }
}