/* eslint-disable no-undef */
import App from '../app'
import request from 'supertest'

describe("Dummy endpoind", () => {
    it("should return dummy json", async () => {
        const res = await request(App)
        .get('/dummy')
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty("title")
    })
})


