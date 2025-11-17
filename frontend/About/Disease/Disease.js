let DiseasesList = document.getElementById("DiseasesList");

async function  getDiseases() 
{
    let res = await axios.get("http://localhost:8000/api/dieases/list");
    displayDiseases(res.data);    
}

function displayDiseases(allDiseases)
{
    DiseasesList.innerHTML = "";
    allDiseases.forEach((Disease) => {
        DiseasesList.innerHTML += `
            <div class="Disease">
                <img src="${Disease.DieasesPic}" alt="${Disease.name}">
                <h2>${Disease.name}</h2>
                <h2>Treatment Possible: ${Disease.treatmentPossible}</h2>
                <h4>${Disease.description}</h4>
                <ol>
                    ${Disease.doctors.map((doctor) => `<li>${doctor.name}</li>`)}
                </ol>
                    
            </div>
        `;
    });
}

getDiseases()