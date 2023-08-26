


document.addEventListener("DOMContentLoaded", function () {

    let audio = new Audio("tack.wav");
    let turn = "X";
    let reset = document.querySelector("#reset");
    const boxes = document.querySelectorAll(".box");
    let info = document.querySelector(".info");

    reset.addEventListener("click", () => {
        boxes.forEach(box => {
            box.querySelector(".box-text").innerText = ""; // Clear the text content of each box
            document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "0px"
            document.querySelector(".line").style.width = "0px"

        });
    });

    function checkWin() {
        let boxtext = document.querySelectorAll(".box-text");

        let possibility = [
            [0, 1, 2, 10, 65, 0],
            [3, 4, 5, 10, 205, 0],
            [6, 7, 8, 10, 357, 0],
            [0, 3, 6, -133, 209, 90],
            [1, 4, 7, 1, 200, 90],
            [2, 5, 8, 141, 209, 90],
            [0, 4, 8, 7, 209, 45],
            [2, 4, 6, 7, 209, -45],
        ];

        possibility.forEach(box => {
            if (
                boxtext[box[0]].innerText === boxtext[box[1]].innerText &&
                boxtext[box[1]].innerText === boxtext[box[2]].innerText &&
                boxtext[box[0]].innerText !== ""
            ) {
                info.innerText = boxtext[box[0]].innerText + " has Won ";
                document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "200px"
                document.querySelector(".line").style.width = "30vw"
                document.querySelector(".line").style.transform = `translate(${box[3]}px, ${box[4]}px) rotate(${box[5]}deg)`
            }
        });

        
    }

    function changeTurn() {
        return turn === "X" ? "O" : "X";
    }

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            audio.play();
            let boxText = box.querySelector(".box-text");
            if (boxText.innerText == "") {
                boxText.innerText = turn;
                turn = changeTurn();
                info.innerText = "Turn for " + turn;
            }
            checkWin();
        });
    });

});


