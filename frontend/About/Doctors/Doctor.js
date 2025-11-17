let DoctorsList = document.getElementById("DoctorsList");

async function  getDoctors() 
{
    let res = await axios.get("http://localhost:8000/api/doctors/list");
    displayDoctors(res.data);    
}

function displayDoctors(allDoctors)
{
    DoctorsList.innerHTML = "";
    allDoctors.forEach((doctor) => {
        DoctorsList.innerHTML += `
            <div class="Doctor">
                <img src="${doctor.ProfilePic}" alt="${doctor.name}">
                <h2>${doctor.name}</h2>
                <h3>Age: ${doctor.age}</h3>
                <h3>${doctor.gender}</h3>
                <h2>${doctor.experience}+ Years Experience</h2>
                <h4>${doctor.speciality}</h4>
            </div>
        `;
    });
}

getDoctors()