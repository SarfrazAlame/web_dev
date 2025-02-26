import { Client } from "pg"

const client = new Client({
    connectionString: "postgresql://postgres:sarfraz123@localhost/postgres"
})


async function createUsersTable() {
    await client.connect()

    const result = await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
        `)
    console.log(result)
}

createUsersTable()

///////////////////////////////////////////////inserting data
async function insertInto() {
    try {
        await client.connect()
        const res = await client.query(`
          INSERT INTO users (username, email, password) VALUES('Sarfraz Alam','sarfrazk7858@gmail.com', 'sarfraz123' )
        `);
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

insertInto()


/////////////////////////////////////////////// getting data
async function gettingData(email:string){
    try {
        await client.connect()
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email]
        const result = await client.query(query,values)

        console.log(result.rows)
    } catch (error) {
        console.log(error)
    }
}

gettingData('sarfrazk7858@gmail.com')