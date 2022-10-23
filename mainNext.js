async function chtckingUsers() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        return data.reduce((generalDoc, doc) => {
            generalDoc.usernames.push(doc.username)
            generalDoc.names.push(doc.name)
            console.log(generalDoc)
            return generalDoc
        }, {
            names: [],
            usernames: []
        })
    } catch (error) {
        throw new Error(error)
        console.error(error)
    }
}

export {
    chtckingUsers
}