let PatientsList = document.getElementById("PatientsList");

async function  getPatients() 
{
    let res = await axios.get("http://localhost:8000/api/patients/list");
    displayPatients(res.data);    
}

function displayPatients(allPatients)
{
    PatientsList.innerHTML = "";
    allPatients.forEach((Patient) => {
        PatientsList.innerHTML += `
            <div class="Patient">
                <img src="${Patient.ProfilePic}" alt="${Patient.name}">
                <h2>${Patient.name}</h2>
                <h3>${Patient.age}</h3>
                <h3>${Patient.gender}</h3>
                <h4>${Patient.admitDate}</h4>

               

                <ol>
                    ${Patient.diease.map((diease) => `<li>${diease.name}</li>`)}
                </ol>    

                 <ol>
                    ${Patient.doctor.map((doctor) => `<li>${doctor.name}</li>`)}
                </ol>

              
            </div>
        `;
    });
}

getPatients()