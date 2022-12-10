import { writable } from "svelte/store";
import { Client, Environment, ApiError } from "square";

export const webData = writable(null)
const client = new Client({
    accessToken: 'EAAAEAzeABaIXk8gWUNwe7sA0aLaFG7z_daPnMpI2MSufyUKgEEHu5HqaRVbEEvj',
    environment: Environment.Sandbox,
});

const { locationsApi } = client

export const store = {

    getCatalog: (data: any) => {
        return new Promise((resolve, reject) => {
            fetch(''), {
                method: 'POST',
                body: JSON.stringify(''),
                headers: {
                    "Content-type": 'application/json; charset=utf-8'
                }
            }
        })
    },

    async getLocations() {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8000/location`), {
                method: 'POST',
                body: JSON.stringify(),
                headers: {
                    "Content-type": 'application/json; charset=utf-8'
                }
            }
        })
      }
}




