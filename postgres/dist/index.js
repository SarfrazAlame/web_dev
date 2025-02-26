"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:sarfraz123@localhost/postgres"
});
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//           id SERIAL PRIMARY KEY,
//           username VARCHAR(50) UNIQUE NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) UNIQUE NOT NULL,
//           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )
//         `)
//     console.log(result)
// }
// createUsersTable()
/////////////////////////////////////////////////inserting data
// async function insertInto() {
//     try {
//         await client.connect()
//         const res = await client.query(`
//           INSERT INTO users (username, email, password) VALUES('Sarfraz Alam','sarfrazk7858@gmail.com', 'sarfraz123' )
//         `);
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }
// insertInto()
///////////////////////////////////////////////// getting data
function gettingData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = "SELECT * FROM users WHERE email = $1";
            const values = [email];
            const result = yield client.query(query, values);
            console.log(result.rows);
        }
        catch (error) {
            console.log(error);
        }
    });
}
gettingData('sarfrazk7858@gmail.com');
