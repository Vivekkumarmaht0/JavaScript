// async-await > Promise > callback

// **async-await**
/*
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// async-await
async function getAllData() {
  try {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
  } catch (err) {
    console.log(err);
  }
}
*/

// **Promise**
/*
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('I am a Promise');
        resolve('Success');
        reject('Network error');
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});


function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data ", dataId);
      resolve('Success');
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}
*/

// Promise chain
/*
function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data1');
            resolve('success');
        }, 3000);
    });
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data2');
            resolve('success');
        }, 3000);
    });
}

console.log('Fetching data1...');
asyncFun1().then((res) => {
    console.log('fetching data2...');
    asyncFun2().then((res) => {});
});


function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data ", dataId);
      resolve('Success');
    }, 2000);
  });
}
*/

// this is called promise chain
/*
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });
*/

// **Callback**
/*
function userName(name, callBack) {
    console.log('Hello ' + name);
    callBack();
}

function sayBye() {
    console.log('Goodbye!');
}

userName('Vivek', sayBye);


function fetchData(callback) {
    setTimeout(() => {
        console.log('Data Fetched!');
        callback();
    }, 2000);
}

function processData() {
    console.log('Processing data....');
}

fetchData(processData);

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log('Data ', dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}
*/

// callback hell
/*
getData(1, () => {
    console.log('Processing data 2 ...')
    getData(2, () => {
        console.log('Processing data 3 ...')
        getData(3, () => {
            console.log('Processing data 4 ...')
            getData(4, () => {
                console.log('Done!');
            });
        });
    });
});
*/

// questions
/*
function squareOfNumber(num, callBack) {
    setTimeout(() => {
        const res = num * num;
        callBack(res); 
    }, 2000);
}

squareOfNumber(5, (res) => {
    console.log('Square is:', res);
});

function ageCheck(age) {
    return new Promise((resolve, reject) => {
        if(age >= 18) {
            resolve('Eligible');
        } else {
            reject('Not Eligible');
        }
    });
}

ageCheck(20)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });



async function square(num) {
    let res = await new Promise((resolve) => {
        setTimeout(() => resolve(num * num), 2000);
    });
    console.log(res);
}
square(10);

function getData(num, callback) {
    setTimeout(() => {
        callback(num * num);
    }, 2000); 
}

getData(5, function(result) {
    console.log("Result", result);
})


function squaree(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 2000);
    });
}

// squaree(15)
//     .then(res => console.log(res));

async function calculate() {
    try {
        let res1 = await squaree(15)
        let res2 = await squaree(res1);

        console.log(res2);
    } catch(err) {
        console.log(err);
    }
}

calculate();
*/
