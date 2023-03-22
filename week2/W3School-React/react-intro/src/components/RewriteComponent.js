Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects(window and button), and the second example returns the Header object twice.

    Example
With a regular function, this represents the object that called the function:

    class Header {
    constructor() {
        this.color = "Red";
    }

    //Regular function:
    changeColor = function () {
        document.getElementById("demo").innerHTML += this;
    }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);


Example
With an arrow function, this represents the Header object no matter who called the function:

    class Header {
    constructor() {
        this.color = "Red";
    }

    //Arrow function:
    changeColor = () => {
        document.getElementById("demo").innerHTML += this;
    }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);


