/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $("#getAllP").click(function () {
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/person/complete",
            type: "GET",
            contentType: "application/json",
            success: function (res) {
                createTable(res);
            }
        })
    })

    $("#getById").click(function () {
        var id = $("#personId").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/person/complete/" + id,
            type: "GET",
            contentType: "application/json",
            success: function (res) {
                createTable(res);
            }
        })
    })

    $("#getByZipcode").click(function () {
        var id = $("#personZipcode").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/person/zipcode/" + id,
            type: "GET",
            contentType: "application/json",
            success: function (res) {
                createTable(res);
            }
        })
    })

    $("#createNewPerson").click(function () {
        var fname = $("#fName").val();
        var lname = $("#lName").val();
        var email = $("#email").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/person",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                firstName: fname,
                lastName: lname,
                email: email
            }),
            success: function () {
                console.log(("Added to the db"))
            }, error: function () {
                console.log(res);
                alert("Error");
            }
        })
    })

    $("#editp").click(function () {
        var id = $("#id").val();
        var fname = $("#fName2").val();
        var lname = $("#lName2").val();
        var email = $("#email2").val();
        $.ajax({
            url: "http://localhost:8084/ca2-backend/api/person/",
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({
                id: id,
                firstName: fname,
                lastName: lname,
                email: email
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
            url: "http://localhost:8084/ca2-backend/api/person/" + id,
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
    var header = "<tr> <th> Firstname </th> <th> Lastname </th> " +
            " <th> Hobby </th> <th> Email </th> <th> Phonenumber </th> </tr>";

    var start = "<tr> <td>";
    var mid = "</td> <td>";
    var end = "</td> </tr>";

    if (data.constructor !== Array) {

        header += start + data.firstName + mid + data.lastName + mid + data.hobbies + mid + data.email + mid + data.phones + end;
        $("#mainPageData").html(header);
        return;
    }

    for (var i = 0; i < data.length; i++) {
        header += start + data[i].firstName + mid + data[i].lastName + mid + data[i].hobbies + mid + data[i].email + mid + data[i].phones + end;
    }
    $("#mainPageData").html(header);
}

