
function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let data = JSON.parse(this.responseText).items;
            var tbodyHtml = `<table>
            <th>Serial number</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Department</th>
            <th>Notes</th>
            <tbody>`
            console.log(tbodyHtml);
            for (var i = 0; i < data.length; i++) {
                tbodyHtml +=`<tr>
        	<td>${data[i].SerialNumber}</td>
        	<td>${data[i].Name}</td>
            <td>${data[i].Quantity}</td>
            <td>${data[i].Unit}</td>
            <td>${data[i].Department}</td>
            <td>${data[i].Notes}</td>
        </tr>
      `;
      console.log(data[i].SerialNumber);
      console.log(tbodyHtml);
            }


            tbodyHtml = tbodyHtml + `</tbody>
            </table>`
            document.getElementById("demo").innerHTML = tbodyHtml;


        }
    }
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}