/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    $("#getAllC").click(function () {
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/company/complete",
            type: "GET",
            contentType: "application/json",
            success: function (res) {
                createTable(res);
            }
        })
    })
    
        $("#getById").click(function () {
        var id = $("#companyId").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/company/complete/" + id,
            type: "GET",
            contentType: "application/json",
            success: function (res) {
                createTable(res);
            }
        })
    })
    
        $("#createNewCompany").click(function () {
        var name = $("#Name").val();
        var cvr = $("#Cvr").val();
        var desc = $("#Description").val();
        var marketvalue = $("#Marketvalue").val();
        var num = $("#Number").val();
        var email = $("#Email").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/company",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                name: name,
                description: desc,
                cvr: cvr,
                NumEmployees: num,
                marketValue: marketvalue,
                email: email,   
            }),
            success: function () {
                console.log(("Added to the db"))
            }, error: function () {
                console.log(res);
                alert("Error");
            }
        })
    })
    
        $("#editc").click(function () {
        var id = $("#id2").val();
        var name = $("#Name2").val();
        var cvr = $("#Cvr2").val();
        var desc = $("#Description2").val();
        var marketvalue = $("#Marketvalue2").val();
        var num = $("#Number2").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/company/",
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({
                id: id,
                name: name,
                description: desc,
                cvr: cvr,
                NumEmployees: num,
                marketValue: marketvalue,
            }),
            success: function () {
                console.log(("Added to the db"))
            }, error: function () {
                console.log();
                alert("Error");
            }
        })
    })
    
    $("#delete").click(function () {
        var id = $("#idDelete").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/company/" + id,
            type: "DELETE",
            success: function () {
                console.log(("Deleted from DB"))
            }, error: function () {
                console.log();
                alert("Error");
            }
        })
    })




})

function createTable(data) {
    var header = "<tr> <th> Company name </th> <th> CVR </th> " +
            " <th> Description </th> <th> Marketvalue </th> <th> Number of Employees </th> </tr>";

    var start = "<tr> <td>";
    var mid = "</td> <td>";
    var end = "</td> </tr>";

    if (data.constructor !== Array) {

        header += start + data.name + mid + data.cvr + mid + data.description + mid + data.marketValue + mid + data.NumEmployees + end;
        $("#mainPageData").html(header);
        return;
    }

    for (var i = 0; i < data.length; i++) {
        header += start + data[i].name + mid + data[i].cvr + mid + data[i].description + mid + data[i].marketValue + mid + data[i].NumEmployees + end;
    }
    $("#mainPageData").html(header);
}