const userInfo =[];
addUserInfo("n1","m",44,66,"O+ve","no","no","no","UK","cardiff",9149943,"abc hos","12.12.20");
addUserInfo("n2","m",41,67,"O-ve","no","no","no","UK","cardiff",9399343,"abc hos","12.12.20");
addUserInfo("n3","m",44,66,"A+ve","no","no","no","UK","cardiff",9994233,"abc hos","12.12.20");
function addUserInfo(name, gender, age, weight, bloodGroup, allergies, healthProblem, otherInfo, country, city, phone, hospital, appoinmentDate) {
user ={};
user.name =name;
user.gender = gender;
user.age =age;
user.weight =weight;
user.bloodGroup =bloodGroup;
user.allergies = allergies;
user.healthProblem = healthProblem;
user.otherInfo =otherInfo;
user.country= country;
user.city=city;
user.phone=phone;
user.hospital=hospital;
user.appoinmentDate =appoinmentDate;
userInfo.push(user);
  
}
console.log(userInfo);