
function showLoginPage() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("signupPage").classList.add("hidden");
    document.getElementById("dashboardPage").classList.add("hidden");
}

function showSignupPage() {
    document.getElementById("signupPage").classList.remove("hidden");
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboardPage").classList.add("hidden");
}

function login() {
    showDashboard();
    alert("Successfully logged in")
}

function signup() {
    showLoginPage();
    alert("Account created! Please login.");
}

function showDashboard() {
    document.getElementById("dashboardPage").classList.remove("hidden");
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("signupPage").classList.add("hidden");
    showStudentSection();
    loadStudents();
}

function logout() {
    showLoginPage();
}

function addStudent() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const name = document.getElementById("studentName").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("studentEmail").value;
    const phone = document.getElementById("phone").value;
    const hobby = document.getElementById("hobby").value;
    const degree = document.getElementById("degree").value;

    const newStudent = { name, dob, email, phone, hobby, degree };
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));

    loadStudents();
    document.getElementById("studentForm").reset();
}

function loadStudents() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    students.forEach(student => {
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${student.name}</td>
            <td>${student.dob}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.hobby}</td>
            <td>${student.degree}</td>
            <td><button onclick="removeStudent(this)" class="btn btn-danger btn-sm">Remove</button></td>
        `;
    });
}

function removeStudent(button) {
    const row = button.parentElement.parentElement;
    const name = row.cells[0].innerText;

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter(student => student.name !== name);
    localStorage.setItem("students", JSON.stringify(students));

    row.remove();
}

function showStudentSection() {
    document.getElementById("studentSection").classList.remove("hidden");
    document.getElementById("teacherSection").classList.add("hidden");
}

function showTeacherSection() {
    document.getElementById("teacherSection").classList.remove("hidden");
    document.getElementById("studentSection").classList.add("hidden");
}
function searchStudent() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll("#studentTable tr");
    rows.forEach(row => {
      const name = row.cells[0].innerText.toLowerCase();
      row.style.display = name.includes(searchValue) ? '' : 'none';
    });
  }
// Show the login page by default
showLoginPage();

