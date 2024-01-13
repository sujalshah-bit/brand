// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const sinon = require('sinon');
// const app = require('../your-express-app'); // Import your Express app
// const User = require('../models/userSchema');
// const { ApiResponse } = require('../utils/ApiResponse');
// const { expect } = chai;

// chai.use(chaiHttp);

// describe('POST /signup', () => {
//   it('should return 201 and success message if signup is successful', async () => {
//     const newUser = {
//       name: 'John Doe',
//       email: 'john@example.com',
//       password: 'password123',
//     };

//     // Stub the save method of User model to prevent actual database interaction
//     const saveStub = sinon.stub(User.prototype, 'save').resolves();

//     const res = await chai.request(app).post('/signup').send(newUser);

//     expect(res).to.have.status(201);
//     expect(res.body).to.deep.equal(
//       new ApiResponse(201, { message: 'Sign Up Successfully' })
//     );

//     // Restore the stub
//     saveStub.restore();
//   });

//   it('should return 400 if name, email, or password is missing', async () => {
//     const incompleteUser = {
//       email: 'john@example.com',
//       password: 'password123',
//     };

//     const res = await chai.request(app).post('/signup').send(incompleteUser);

//     expect(res).to.have.status(400);
//     expect(res.body).to.deep.equal(
//       new ApiResponse(400, 'Provide Name, Email, and Password')
//     );
//   });

//   it('should return 409 if user with the same email already exists', async () => {
//     const existingUser = {
//       name: 'John Doe',
//       email: 'john@example.com',
//       password: 'password123',
//     };

//     // Stub the findOne method of User model to simulate an existing user
//     const findOneStub = sinon.stub(User, 'findOne').resolves(existingUser);

//     const res = await chai.request(app).post('/signup').send(existingUser);

//     expect(res).to.have.status(409);
//     expect(res.body).to.deep.equal(new ApiResponse(409, 'User Already Exist'));

//     // Restore the stub
//     findOneStub.restore();
//   });

//   it('should handle errors during user creation and return 500', async () => {
//     const newUser = {
//       name: 'John Doe',
//       email: 'john@example.com',
//       password: 'password123',
//     };

//     // Stub the save method to simulate an error during user creation
//     const saveStub = sinon
//       .stub(User.prototype, 'save')
//       .rejects(new Error('Simulated error'));

//     const res = await chai.request(app).post('/signup').send(newUser);

//     expect(res).to.have.status(500);
//     expect(res.body).to.deep.equal(
//       new ApiResponse(500, 'Internal Server Error')
//     );

//     // Restore the stub
//     saveStub.restore();
//   });

//   // Add more tests for email verification and other scenarios if needed

//   // Cleanup: remove any created users in the database
//   after(async () => {
//     await User.deleteMany({ email: { $in: ['john@example.com'] } });
//   });
// });
