
    function printTable(n) {
      let data = "";

      for (let i = 1; i <= 10; i++) {
        data += n + " × " + i + " = " + (n * i) + "<br>";
      }

      return data;
    }

    function showTable() {
      let number = Number(document.getElementById("num").value);

      if (!number || number <= 0) {
        alert("Please enter a positive number!");
        return;
      }

      document.getElementById("result").innerHTML = printTable(number);
    }
  