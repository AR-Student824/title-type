exports.TitleType = function(str) {
    return new Promise((resolve, reject) => {
    if (typeof str != 'string' || !str) {
        reject(
            'string is required'
        )
    } else {
        window.title = `${str.split()[0]}`
        resolve()
    }
})
}