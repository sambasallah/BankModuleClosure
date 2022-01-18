
const accountInfoList = [];

window.onload = function() {
    const account = (function() {
        return {
            createAccount: function(name,amount) {
                let accountDetails = {name: name, amount: amount};
                accountInfoList.push(accountDetails);
                console.log(accountDetails)
                this.displayAccountList();
            },
            displayAccountList: function() {
                let data = ``;
                accountInfoList.map((value) => {
                    data += `Account name: ${value.name} Balance: ${value.amount}\n`
                })
                document.getElementById("textArea").innerHTML = data;
            }
        }
    })();

    document.getElementById("create").onclick = () => {
        const name = document.getElementById("accountName").value;
        const amount = document.getElementById("amount").value;
        account.createAccount(name,amount);
    }

}