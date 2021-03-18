const cities = {
	"India": ["Mumbai", "Chennai", "Delhi"],
	"United Kingdom": ["London", "Cardiff", "Luturn"],
	"United States": ["New York", "California", "Texas"]
};

const hospitals = {
             "Mumbai":[ "Global Hospital", "Wockhardt Hospital", "Lilavati Hospital" ],
             "Chennai":[ "Fortis Malar Hospital", "Apollo Hospital", "Dr. Mehta's Hospital" ],
             "Delhi":[ "Indraprastha Apollo Hospital", "Artemis Hospital", "Bansal Global Hospital" ],
			 "London":[ "The Royal London Hospital", "St Thomas' Hospital", "London Bridge Hospital" ],
             "Cardiff":[ "St David's", "Nuffield Health Cardiff Bay Hospital", "Cardiff Royal Infirmary" ],
             "Luturn":[ "Lutheran Hospital", "Cleveland Clinic - Lutheran Hospital", "UnityPoint Health - Iowa Lutheran Hospital" ],
			 "New York":[ "New York Presbyterian Hospital", "New York City Health & Hospital", "NYC Health + Hospitals / Lincoln" ],
             "California":[ "Kindred Hospital San Diego", "College Hospital Costa Mesa", "Pacifica Hospital of the Valley" ],
             "Texas":[ "Memorial Hospital of Texas County", "CHRISTUS Santa Rosa Hospital Westover Hills", "Kindred Hospital Houston Medical Center" ]
           }; 
		   
		   
let values = Object.keys(cities);

function script() {
	for (const val of values) {
		var country = document.getElementById("countries");
		var option = document.createElement("option");
		option.value = val;
		option.text = val.charAt(0).toUpperCase() + val.slice(1);
		country.add(option);
	}
const currentDate = new Date();


	let dates = document.getElementById("dateList");
	for (i=0;i<10;i++) {
		currentDate.setDate(currentDate.getDate() + 1);
		let option = document.createElement("option");
		option.value = currentDate.toLocaleDateString();
		option.text = currentDate.toLocaleDateString();
		dates.add(option);
	}
	
	
console.log(currentDate.toLocaleDateString());
}

function populateCities(country) {
	let city = document.getElementById("cities");
	city.options.length = 0;
	let hospital = document.getElementById("hospitals");
	hospital.options.length = 0;
	for (const val of cities[country]) {
		let option = document.createElement("option");
		option.value = val;
		option.text = val.charAt(0).toUpperCase() + val.slice(1);
		city.add(option);
	}
	populateHospitals(cities[country][0]);

}

function populateHospitals(city) {
 	let hospital = document.getElementById("hospitals");
	hospital.options.length = 0;
 	for (const val of hospitals[city]) {
		let option = document.createElement("option");
		option.value = val;
		option.text = val.charAt(0).toUpperCase() + val.slice(1);
		hospital.add(option);
	}  
}

const userInfo = [];
addUserInfo("n1", "m", 44, 66, "O+ve", "no", "no", "no", "UK", "cardiff", 9149943, "abc hos", "12.12.20");
addUserInfo("n2", "m", 41, 67, "O-ve", "no", "no", "no", "US", "Texas", 9399343, "abc hos", "12.12.20");
addUserInfo("n3", "m", 44, 66, "A+ve", "no", "no", "no", "India", "Chennai", 9994233, "abc hos", "12.12.20");

function addUserInfo(name, gender, age, weight, bloodGroup, allergies, healthProblem, otherInfo, country, city, phone, hospital, appoinmentDate) {
	user = {};
	user.name = name;
	user.gender = gender;
	user.age = age;
	user.weight = weight;
	user.bloodGroup = bloodGroup;
	user.allergies = allergies;
	user.healthProblem = healthProblem;
	user.otherInfo = otherInfo;
	user.country = country;
	user.city = city;
	user.phone = phone;
	user.hospital = hospital;
	user.appoinmentDate = appoinmentDate;
	userInfo.push(user);
}
console.log(userInfo);