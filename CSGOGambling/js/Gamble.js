function spookText() {
    let luck = Math.floor(Math.random() * 10);
    console.log(luck)
    if (luck === 1) {
        window.location.replace("http://lukashelp.me");
    }
}

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
    var MoneyToGamble = 0;
    MoneyToGamble = document.getElementById('#GambleMoney').Value;
    if (Money !== 0){
        if (MoneyToGamble > Money){
            DisplayMessage("You can't afford this.");
        }
        else {
            DoMaths(MoneyToGamble, Money);
        }
    }
    else {
        DisplayMessage("You have no money.");
    }
}

function DoMaths(Wager, Money) {
    let luck = Math.floor(Math.random() * 10);
    let NewMoney = 0;
    if (luck < 4) {
        DisplayMessage("You won.");
        NewMoney = +Money + +Wager;
    }
    else {
        NewMoney = +Money - +Wager;
        DisplayMessage("You lost.");
    }
    
    console.log(Wager);
    UpdateMoney(NewMoney);
}

let Money = 0;