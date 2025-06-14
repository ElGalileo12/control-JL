import bcrypt from "bcryptjs";

const password = "user123";

bcrypt.hash(password, 10).then((hash) => {
  console.log("Nuevo hash:", hash);
});
