async function getAll () {
    fetch('logements.json')
    .then((response) => {
        return response.json()
    })
    /*.then((data) => {
        console.log(data)
        return data
    })*/
    .catch((err) => {
        return ("There was an error", err)
    })
}

export default getAll

/*async function getOne(id) {

}*/




