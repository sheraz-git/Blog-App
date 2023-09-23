import { userSignupCtrl } from "../../controller/user.controller";
import User from "../../model/Users/user.model";

const mockRequest = () => {
  return {
    body: {
      firstName: "test",
      lastName: "test1",
      email: "test@gmail.com",
      password: "test123",
    },
  };
};

const mockResponse = () => {
    return{
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  
  }

const mockUser = {
  _id: "65087a7e252d599b68ad4b06",
  firstName: "test",
  lastName: "test1",
  email: "test@gmail.com",
  password:"test123"
};

describe("userSignup", () => {
    it("should user signup", async () => {
        jest.spyOn(User, "create").mockResolvedValueOnce(mockUser);
        const mockReq = mockRequest();
        const mockRes = mockResponse();
  
        userSignupCtrl(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(User.create).toHaveBeenCalledWith(mockReq.body);
      }, 50000); 
});
