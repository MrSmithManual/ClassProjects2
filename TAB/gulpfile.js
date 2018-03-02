<html><head>
<style>
table, td {
    border: 12px solid red;
}
</style>
</head>
<body>

<h3>A demonstration of how to access a TABLE element</h3>

<table id="myTable">
  <tbody><tr>
    <td></td>
    <td>cell 2</td>
  </tr>
  <tr>
    <td>cell 3</td>
    <td>cell 4</td>
  </tr>
</tbody></table>

<p>Click the button to remove the first row in the table.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var x = document.getElementById("myTable");
    x.deleteRow(0);
}
</script>
</body></html>