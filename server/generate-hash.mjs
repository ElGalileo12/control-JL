import bcrypt from "bcryptjs";

const plain = "admin123";
const hash = "$2b$10$LC6qvSJSDd7trgnUAVcKSeZjm0UNSE5vdu0wLRPrn4JFS3mC0CSIW"; // el nuevo que generaste

const match = await bcrypt.compare(plain, hash);
console.log("¿Coincide?", match); // Debe decir true
