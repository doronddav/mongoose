const mongoose = require("mongoose");
const pet = require("./allPets");
const vet = require("./vets");
const owner = require("./owners");
const { populate } = require("./owners");
const { objectId } = require("mongoose");
let AllOwners = mongoose.model("owner", owner);
let Allpets = mongoose.model("pet", pet);
let Allvets = mongoose.model("vet", vet);
// let AllVets = mongoose.model("vet", vet);
try {
  mongoose.connect("mongodb://localhost:27017/pets");

  console.log("connected");
} catch (e) {
  console.log(e);
} finally {
  async function addPet(name, food, age) {
    const Pet = new pet({
      petName: name,
      FavoritFoot: food,
      age: age,
    });
    // await Pet.save();
  }
}
// addPet("Nala", "Chiken", 2);
// addPet("Yuki", "fish", 3);
// addPet("Bambel", "Chiken", 1.5);
// addPet("Nala2", "Chiken", 2);
// addPet("Tommy", "Salmon", 5);

async function addVet(Fname, Lname, phone) {
  const Vet = new vet({
    vetFName: Fname,
    vetLName: Lname,
    phoneNum: phone,
  });
  // await Vet.save();
}
// addVet("Barbara", "", "0548974331");
// addVet("Idit", "Mash", "0574128557");
// addVet("Roey", "Mash", "054824195");
// addVet("Noga", "Ron", "0521679458");

async function AddOwner(fName, lName, email, age, vet, pet, pet2) {
  const Owner = new Owner({
    OwnerFName: fName,
    OwnerLName: lName,
    email: email,
    age: age,
    vet: vet,
    pets: [pet, pet2],
  });

  // await Owner.save();
}
// AddOwner(
//   "Doron",
//   "David",
//   "dorond300@gmail.com",
//   28,
//   mongoose.Types.ObjectId("62a4789f7aa059ea1ec7ef11"),
//   mongoose.Types.ObjectId("62a476e01c2173d62edc637e")
// );

// AddOwner(
//   "Gal",
//   "Bareket",
//   "dorond300@gmail.com",
//   28,
//   mongoose.Types.ObjectId("62a4789f7aa059ea1ec7ef12"),
//   mongoose.Types.ObjectId("62a476e01c2173d62edc637f"),
//   mongoose.Types.ObjectId("62a476e01c2173d62edc6380")
// );

// AddOwner(
//   "Nave",
//   "Harush",
//   "navnav@gmail.com",
//   27,
//   mongoose.Types.ObjectId("62a4789f7aa059ea1ec7ef13"),
//   mongoose.Types.ObjectId("62a476e01c2173d62edc6381")
// );

// AddOwner(
//   "Tamar",
//   "Mashiah",
//   "tamari@gmail.com",
//   26,
//   mongoose.Types.ObjectId("62a4789f7aa059ea1ec7ef14"),
//   mongoose.Types.ObjectId("62a476e01c2173d62edc637e"),
//   mongoose.Types.ObjectId("62a476e01c2173d62edc6382")
// );

//   await newVet.save();
// await newOwner.save();

// AllOwners.find({ ownerFName: "Nave" }, function (err, obj) {
//   console.log("Tamarmarmar");
// });
// console.log(obj);

// async function printVetPetByOwner() {
//   const ownerResult = await AllOwners.find({});
//   console.log(ownerResult);
// }
// printVetPetByOwner();

// async function printVetPetByVet() {
//   const vetResult = await Allvets.find({});
//   console.log(vetResult);
// }
// printVetPetByVet();

async function printVetPetBPet() {
  const petResult = await Allpets.find({});
  console.log(petResult);
}
printVetPetBPet();
// Allvets.find({}, function (err, obj) {
//   console.log("Tamarmarmar");
//   console.log(obj);
// });

// mongoose.connection.close();
