
        blackCofee = document.querySelector("#black-cofee")
        coldCofee = document.querySelector("#cold-cofee")
        greenCofee = document.querySelector("#green-cofee")
        hotCofee = document.querySelector("#hot-cofee")
        mai = document.querySelector(".m2")

        btn = document.querySelector("#sumbit-btn")

        black = document.querySelector("#black")
        cold = document.querySelector("#cold")
        green = document.querySelector("#green")
        hot = document.querySelector("#hot")
        total = document.querySelector("#order")

        let mainMsgBox = document.querySelector(".mainMsgBox")
        let msgText = document.querySelector(".msgText")
        let mainMsgBtn = document.querySelector(".mainMsgBtn")
        let finalMsg = document.querySelector(".msg")

        blackC = 0;
        coldC = 0;
        hotC = 0;
        greenC = 0;
        totalC = 0;

        black.innerText = blackC
        cold.innerText = coldC
        green.innerText = greenC
        hot.innerText = hotC

        function totalCofee() {
            totalC = blackC + coldC + hotC + greenC
            total.innerText = totalC
        }

        blackCofee.addEventListener("click", () => {
            blackC = blackC + 1
            black.innerText = blackC
            totalCofee()
        })

        coldCofee.addEventListener("click", () => {
            coldC = coldC + 1
            cold.innerText = coldC
            totalCofee()
        })

        greenCofee.addEventListener("click", () => {
            greenC = greenC + 1
            green.innerText = greenC
            totalCofee()
        })

        hotCofee.addEventListener("click", () => {
            hotC = hotC + 1
            hot.innerText = hotC
            totalCofee()
        })

        btn.addEventListener("click", () => {
            if (totalC == 0) {
                mai.classList.add("hide")
                msgText.innerText = "You have not ordered any Coffee, Please order your favorite Coffee"
                mainMsgBtn.innerText = "Try Again"
                mainMsgBox.classList.remove("hide")
                finalMsg.classList.add("msg-error")
                finalMsg.classList.remove("msg-success")
            } else if (totalC == 1) {
                mai.classList.add("hide")
                msgText.innerText = `Your order which is ${totalC} coffee will deliver soon`
                mainMsgBtn.innerText = "DONE"
                mainMsgBox.classList.remove("hide")
                finalMsg.classList.add("msg-success")
                finalMsg.classList.remove("msg-error")
            } else {
                mai.classList.add("hide")
                msgText.innerText = `Your order which is ${totalC} coffees will deliver soon`
                mainMsgBtn.innerText = "DONE"
                mainMsgBox.classList.remove("hide")
                finalMsg.classList.add("msg-success")
                finalMsg.classList.remove("msg-error")
            }
        })

        mainMsgBtn.addEventListener("click", () => {
            mai.classList.remove("hide")
            mainMsgBox.classList.add("hide")
            finalMsg.classList.remove("msg-error", "msg-success")
            blackC = 0;
            coldC = 0;
            hotC = 0;
            greenC = 0;
            totalC = 0;
            black.innerText = blackC;
            cold.innerText = coldC;
            hot.innerText = hotC;
            green.innerText = greenC;
            total.innerText = totalC
        })