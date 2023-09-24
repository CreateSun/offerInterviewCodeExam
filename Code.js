/**题目1 */

function promise() {
    return new Promise((resolve, reject) => {
        reject()
    }).catch(err => {
        console.log(err)
    })
}

async function foo() {
    console.log('start foo')
    const  res = await promise()
    console.log('res', res)
    console.log('222')
}

foo()
console.log('end')