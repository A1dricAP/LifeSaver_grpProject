const cities = {
	"India": ["Mumbai", "Chennai", "Delhi"],
	"United Kingdom": ["London", "Cardiff", "Luturn"],
	"United States": ["New York", "California", "Texas"]
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
}

function populateCities(country) {
	let city = document.getElementById("cities");
	city.options.length = 0;
	city.name = "cities";
	city.id = "cities"
	for (const val of cities[country]) {
		let option = document.createElement("option");
		option.value = val;
		option.text = val.charAt(0).toUpperCase() + val.slice(1);
		city.add(option);
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