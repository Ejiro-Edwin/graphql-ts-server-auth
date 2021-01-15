//import { startServer } from "..";
import {request} from "graphql-request"
import {host} from './constants'

const email = "bob@bob.com";
const password = "jalksdf";

const mutation = `
mutation {
    register(email: "${email}", password: "${password}")
}
`;


test("Register user", async () => {
 //   await startServer();
    const response = await request(host, mutation)
    expect(response).toEqual({register: true})
})