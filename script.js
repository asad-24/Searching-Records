
const DATA = [
    {
        id: 0,
        name: "Subhan",
        status: "Graduated",
        university: "GCUF",
        contact: "0301 7144752",
    },

    {
        id: 1,
        name: "Ahmed",
        status: "Graduated",
        university: "GCUF",
        contact: "0304 6497143",
    },
    {
        id: 2,
        name: "Rehan",
        status: "In Progress",
        university: "GCUF",
        contact: "0307 6385672",
    },
    {
        id: 3,
        name: "Asad",
        status: "In Progress",
        university: "PU",
        contact: "0313 88 25124",
    },
    {
        id: 4,
        name: "Umer",
        status: "In Progress",
        university: "BZU",
        contact: "0336 7454790",
    },
    {
        id: 5,
        name: "Zohaib",
        status: "In Progress",
        university: "GCUF",
        contact: "0302 6660865",
    },
    {
        id: 6,
        name: "Ahmed Owais",
        status: "In Progress",
        university: "GCUF",
        contact: "0310 6938050",

    },
    {
        id: 7,
        name: "Arham",
        status: "In Progress",
        university: "GCUF",
        contact: "0303 0108360",
    },
    {
        id: 8,
        name: "Afzaal",
        status: "In Progress",
        university: "GCUF",
        contact: "0304 4621015",
    },
    {
        id: 9,
        name: "Rabi",
        status: "In Progress",
        university: "GCUF",
        contact: "0304 8825465",
    },
    {
        id: 10,
        name: "Hamiz",
        status: "In Progress",
        university: "IUB",
        contact: "0305 9970342",
    },


]
let selectIndex = null;
let selectedData = null;

let takeData = () => {
    let usersValue = document.getElementById("user-input").value;
    console.log(usersValue)

    compareData(usersValue)
}
let compareData = (v) => {
    let countStd = 0;
    DATA.forEach((val, index) => {
        if (DATA[index].name == v || DATA[index].university == v || DATA[index].id == v) {

            countStd += 1;






            selections(val, index, countStd)


        }

    })




}
let selections = (val, index, countStd) => {
    let table = document.getElementById("table")

    if (countStd == 1) {
        dataTable.innerHTML = " ";

        tableHeading.innerHTML = " ";



        let value = Object.values(DATA[index])
        let keys = Object.keys(DATA[index])



        for (value of Object.keys(DATA[index])) {
            tableHeading.innerHTML += `<th   id='${index}' > ${value} </th>`;
        }

        for (value of Object.values(DATA[index])) {
            dataTable.innerHTML += `<td  id='${index}' > ${value} </td>`;


        }
    }


    else {
        let value = Object.values(DATA[index])


        var row = document.createElement('tr');
        for (value of Object.values(DATA[index])) {
            row.innerHTML += `<td  > ${value} </td>`;


        }
        table.appendChild(row);



    }

}

let renderTable = () => {
    var tbody = document.getElementById("tbody");


    DATA.forEach((val, index) => {
        let value = Object.values(DATA[index])

        var row = document.createElement('tr');

        for (value of Object.values(DATA[index])) {
            row.innerHTML += `<td > ${value} </td>`;


        }
        tbody.appendChild(row);


        console.log(DATA[index])
    })


}


renderTable()

let highLighter = (e) => {
    if (e.target.value == "inprogress") {
        alert(`In Progress student highlight with Green color`)
        DATA.forEach((val, index) => {
            if (DATA[index].status == "In Progress") {


                backgroundChange(val, index);

            }

        })
    }
    else if (e.target.value == "Graduated") {
        alert(`In Progress student highlight with yellow color`)
        DATA.forEach((val, index) => {
            if (DATA[index].status == "Graduated") {


                backgroundChangeG(val, index);

            }




        })
    }
}

let backgroundChange = (val, index) => {
    let tbody = document.getElementById("tbody")
    let rowIndex = index;
    var row = tbody.rows[rowIndex];

    // Change the background color of the row
    row.style.backgroundColor = 'green';



}

let backgroundChangeG = (val, index) => {
    let tbody = document.getElementById("tbody")
    let rowIndex = index;
    var row = tbody.rows[rowIndex];

    // Change the background color of the row
    row.style.backgroundColor = 'yellow';



}
