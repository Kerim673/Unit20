var Money = 0;

function DepositMoney() {
    if (Money === 0) {
        Money = 50;
        UpdateMoney(Money);
    }
    else {
        DisplayMessage("Spend all of your money first.");
    }
}

function DisplayMessage(Message) {
    document.getElementById("MessageBox").innerHTML = Message;
}

function UpdateMoney(MoneyToUpdate) {
    document.getElementById("Balance").innerHTML = MoneyToUpdate;
}

function Roll() {
    let MoneyToGamble = 0;
    MoneyToGamble = document.getElementById("Wag").value;
    if (Money !== 0){
        if (MoneyToGamble > Money){
            DisplayMessage("You can't afford this.");
        }
        else {
            DoMaths(MoneyToGamble);
        }
    }
    else {
        DisplayMessage("You have no money.");
    }
}

function DoMaths(Wager) {
    let luck = Math.floor(Math.random() * 10);
    if (luck < 4) {
        DisplayMessage("You won.");
        Money = Money + Number(Wager);
    }
    else {
        Money = Money - Number(Wager);
        DisplayMessage("You lost.");
    }
    
    console.log(Wager, Money);
    UpdateMoney(Money);
}