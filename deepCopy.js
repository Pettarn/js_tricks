let user = {
    name: "John",
    children: {
        A: "A",
        B: "B",
        C: {
            D: "D",
            E: "E",
        },
    }
}

let another = {}

function deepCopy (Object1, Object2) {
    for(let elem in Object2) {
        if(doHaveChild(Object2[elem])) {
            Object1[elem] = {}
            deepCopy(Object1[elem], Object2[elem])
        }
        else {
            Object1[elem] = Object2[elem]
        }
    }
}

function doHaveChild (something) {
    return typeof(something) === "object"
}

deepCopy(another, user)

another.name = "Tom"
another.children = {}

console.log(user)