// 封装 ajax
const ajax = (method, path, data, callback) => {
    let r = new XMLHttpRequest()
    // 端口不一样 就可以演示跨域了
    let host = 'http://127.0.0.1:4000'
    path = host + path
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    r.send(data)
}


const fetch = (url, callback) => {
    ajax('GET', url, '', function(r) {
        console.log('debug raw response', r, r.length)
        // let data = JSON.parse(r)
        callback(r)
    })
}

/*const create = (url, form, callback) => {
    let data = JSON.stringify(form)
    ajax('POST', url, data, function(r) {
        console.log('debug add response', r, r.length)
        let data = JSON.parse(r)
        callback(data)
    })
}*/

// 下面几个函数都是测试 api
// 除了 basic 外, 其他函数暂时用不到, 因为后端服务器没有启动
const testFetchBasic = () => {
    let url = '/api/coisini'
    let response = (r) => {
        console.log('**** debug r ****', r)
    }
    fetch(url, response)
}
// const testFetch = () => {
//     let url = '/api/topic/all'
//     let response = (r) => {
//         console.log('debug r', r)
//     }
//     fetch(url, response)
// }

// const testCreate = () => {
//     let url = '/api/topic/add'
//     let response = (r) => {
//         console.log('create response', r)
//     }
//     let form = {
//         title: 'nodeclub',
//         content: 'node11',
//     }
//     create(url, form, response)
// }

const __main = () => {
    testFetchBasic()
    // testFetch()
    // testCreate()
}

__main()