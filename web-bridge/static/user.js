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


// 下面几个函数都是测试 api
// 除了 basic 外, 其他函数暂时用不到, 因为后端服务器没有启动
const testFetchBasic = () => {
    let url = '/api/coisiniTwo'
    let response = (r) => {
        console.log('**** debug r ****', r)
    }
    fetch(url, response)
}


const __main = () => {
    testFetchBasic()

}

__main()