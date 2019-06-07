let user = {
    name: "John",
    children: {
        A: "A"
    }
}

for(let elem in user) {
    console.log(user[elem])
}