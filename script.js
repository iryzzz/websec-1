var last_result = "";

function buttonClickHandler()
{
    let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;

    if (left != "" && right != ""){
        var result = "";

        switch (document.getElementById("select1").value){
            case 'sum':
                result = left + "+" + right + "=" + (parseFloat(left) + parseFloat(right));
                break;
            case 'dif':
                result = left + "+" + right + "=" + (parseFloat(left) - parseFloat(right));
                break;
            case 'mul':
                result = left + "+" + right + "=" + (parseFloat(left) * parseFloat(right));
                break;
            case 'div':
                if (Math.abs(right) < Number.EPSILON){
                    alert("Ошибка: деление на ноль.")
                    return;
                }
                result = left + "+" + right + "=" + (parseFloat(left) / parseFloat(right));
                break;
        }     
        document.getElementById("results").innerHTML = '<p style="opacity: 0.5;">' + last_result + "</p>" + "<p>" + result + "</p>";
        last_result = result;
    }
}
