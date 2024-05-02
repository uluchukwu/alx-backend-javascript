interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: student = {
    firstName: "Sopulu",
    lastName: "Mba",
    age: 27,
    location: "USA"
};
const student2: student = {
    firstName: "Uchenna",
    lastName: "Oodo",
    age: 29,
    location: "Canada"
};
const studentsList: Array<student> = [student1, student2];
const table = document.createElement("table");
document.body.appendChild(table);
const thead = document.createElement("thead");
table.appendChild(thead);
const tr = document.createElement("tr");
thead.appendChild(tr);
const th1 = document.createElement("th");
th1.textContent = "firstName";
tr.appendChild(th1);
const th2 = document.createElement("th");
th2.textContent = "location";
tr.appendChild(th2);

const tbody = document.createElement("tbody");
table.appendChild(tbody);
studentsList.forEach((student) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const td1 = document.createElement("td");
    td1.textContent = student.firstName;
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.textContent = student.location;
    tr.appendChild(td2);
});


