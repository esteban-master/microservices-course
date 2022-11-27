import request from 'supertest'
import { app } from '../../app'

test('return 201', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      name: 'test',
      email: 'test@test.com',
      password: 'clave'
    }).expect(201)
})