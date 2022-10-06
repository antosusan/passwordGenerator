let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnpqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNPQRSTUVWXYZ"
    const number = "0123456789"
    const symbol = "~!@#$%^&*()_+{}|:'<.,/?"

    const data = lowerAlphabet + upperAlphabet + number + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}
const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    // alert("Password Has Been Generated!")
}
const savePassword = () => {
    document.title = password.value
    // saveButton.setAttribute('href','data:text/plain;charset=utf-8' + encodeURIComponent(`passowrd saya +${document.title}`))
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    // saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    saveButton.setAttribute('download', 'MyPassoword.txt')

    setTimeout(() => {
        alert('Berhasil di Simpan')
    }, 1000)

}