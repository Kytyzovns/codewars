// promises .than .catch .finally

callbackFetch("https://books.com/authors", (err, data) => {
  if (err) {
    console.log("something went wrong");
  } else {
    callbackFetch(`https://books.com/authors/author${data.id}`, (err, data) => {
      if (err) {
        console.log("something went wrong");
      } else {
        callbackFetch(
          `https://books.com/authors/author342567/${data.books}`,
          (err, data) => {
            if (err) {
              console.log("something went wrong");
            } else {
              callbackFetch(
                `https://books.com/authors/author342567/books/${data.bookId}`,
                (err, data) => {
                  if (err) {
                    console.log("something went wrong");
                  } else {
                    callbackFetch(
                      `https://books.com/authors/author342567/books/book/${data.page}`,
                      (err, data) => {
                        if (err) {
                          console.log("something went wrong");
                        } else {
                          setPage(data);
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    });
  }
});

// promiseFetch("https://books.com/authors").then((data) => {
// 	promiseFetch(`https://books.com/authors/author${data.id}`).then((data) => {
// 		promiseFetch(`https://books.com/authors/author342567/${data.books}`).then((data) => {

// 		})
// 	})
// })

promiseFetch("https://books.com/authors")
  .then((data) => {
    return promiseFetch(`https://books.com/authors/author${data.id}`);
  })
  .then((data) => {
    return promiseFetch(`https://books.com/authors/author342567/${data.books}`);
  })
  .then((data) => {
    return promiseFetch(
      `https://books.com/authors/author342567/books/${data.bookId}`
    );
  })
  .then((data) => {
    return promiseFetch(
      `https://books.com/authors/author342567/books/book/${data.page}`
    );
  })
  .then((data) => {
    setPage(data);
  })
  .catch((err) => {
    console.log("something went wrong", err);
  });

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([1, 4, 6, "sdfjkh"]);
    rej("something went wrong");
  }, 2000);
});

// console.log(promise);

// function Promise(executor) {
// 	const resolve = (data) => {
// 		return {
// 			state: 'fulfilled',
// 			result: data
// 		}
// 	}

// 	const reject = (err) => {
// 		return {
// 			state: 'rejected',
// 			result: err
// 		}
// 	}

// 	executor(resolve, reject)
// }

// const fs = require('fs')

// const getDataFromFile = (url) => {
// 	return new Promise((res, rej) => {
// 		fs.readFile(url, (err, data) => {
// 			if(err) {
// 				rej(err)
// 			} else {
// 				res(data)
// 			}
// 		})
// 	})
// }

// import getDataFromFile from 'liba'

// const promise = getDataFromFile('./index.html')

// import axios from 'axios'

// const promise = axios.get('https://userlist.com')

// setIsLoading(true)
// disableButton(true)

// promise.then((data) => {
// 	// setIsLoading(false)
// 	// disableButton(false)
// 	setState(data)
// })

// promise.catch((err) => {
// 	// setIsLoading(false)
// 	// disableButton(false)
// 	setError(err)
// })

// promise.finally(() => {
// 		setIsLoading(false)
// 	disableButton(false)
// })

// const getNewPromise = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // res("string");
//       rej("some error");
//     }, 2000);
//   });
// };

// getNewPromise().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getNewPromise()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getNewPromise()
//   .then((data) => {
//     console.log("then1", data);
//     return new Promise((res) => {
//       res("11");
//     });
//   })
//   .then((data) => {
//     console.log("then2", data);
//     // throw new Error('some error')
//     console.log(b);
//     return 20;
//   })
//   .then((data) => {
//     console.log("then3", data);
//     return 30;
//   })
//   .catch((err) => {
//     console.log("catch1", err);
//     return 40;
//   })
//   .then((data) => {
//     console.log("then4", data);
//     return 50;
//   })
//   .finally((data) => {
//     console.log("finally", data);
//     return 60;
//   })
//   .then((data) => {
//     console.log("then5", data);
//     return 70;
//   });
// c1 err -> t4 50 -> f 60 -> t5 40
// c1 err -> t4 40 -> f 50 -> t5 60
// c1 err -> t4 40 -> t5 50 -> f 70
