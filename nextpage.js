function confirmSave(){
    if(confirm("OK để thêm, Cancel để hủy!!!")){
        save();
    }else{
        console.log("Hủy lưu");
    }
}

function save(){
    let fullname = document.getElementById('fullname').value;
    let dob = document.getElementById('dob').value;
    let gender = '';
    if (document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    }else if (document.getElementById('female').checked){
        gender = document.getElementById('female').value;
    }
    
    var result = [];
    let language = '';
    if (document.getElementById('english').checked){
         language = document.getElementById('english').value;
        result.push(language);
    }
     if (document.getElementById('vietnamese').checked){
         language = document.getElementById('vietnamese').value;
        result.push(language);
        
    }
     if (document.getElementById('japanese').checked){
         language = document.getElementById('japanese').value;
        result.push(language);
    }
     if (document.getElementById('chinese').checked){
         language = document.getElementById('chinese').value;
        result.push(language);
    }
     if (document.getElementById('french').checked){
         language = document.getElementById('french').value;
        result.push(language);
    }
    let lop = document.getElementById('class1').value;

    if(_.isEmpty(fullname)){
        document.getElementById('fullname-error').innerHTML = 'nhap thieu';
    }else {
        document.getElementById('fullname-error').innerHTML = '';
    }
    if(_.isEmpty(dob)){
        document.getElementById('dob-error').innerHTML = 'nhap thieu';
    }else {
        document.getElementById('dob-error').innerHTML = '';
    }
    if(_.isEmpty(gender)){
        document.getElementById('gender-error').innerHTML = 'nhap thieu';
    }else {
        document.getElementById('gender-error').innerHTML = '';
    }
    if(result.length <= 0){
        document.getElementById('language-error').innerHTML = 'nhap thieu';
    }else {
        document.getElementById('language-error').innerHTML = '';
    }
    if(_.isEmpty(lop)){
        document.getElementById('class-error').innerHTML = 'nhap thieu';
    }else {
        document.getElementById('class-error').innerHTML = '';
    }

    if(fullname && dob && gender && result.length > 0 && lop){

        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

         students.push({
            fullname: fullname,
            dob: dob,
            gender: gender,
            language: result,
            lop: lop,
         });

         localStorage.setItem('students', JSON.stringify(students));

       this.renderListStudent();
    }   
}

function renderListStudent(){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    if (students.length === 0) {
        document.getElementById('list').style.display = 'none';
        return false;        
    }

    document.getElementById('list').style.display = 'block';

    let tabeleContent = `<tr>
         <th>Name</th>
         <th>Class</th>
         <th>DOB</th>
         <th>Gender</th>
         <th>Language</th>
         <th></th>
       </tr>`;

       students.forEach((student, index) => {       
        let studentID = index;
        index++;

        tabeleContent += `<tr>
        <th>${student.fullname}</th>
        <th>${student.lop}</th>
        <th>${student.dob}</th>
        <th>${student.gender}</th>
        <th>${student.language}</th>
        <th>
            <a href='#' onclick = 'deleteStudent(${studentID})'>Delete</a>
        </th>
      </tr>`;
       })

       document.getElementById('grid-students').innerHTML = tabeleContent;  

     document.getElementById('total').innerHTML= students.length; 
}

function deleteStudent(id){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id,1);
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudent();
    
}
