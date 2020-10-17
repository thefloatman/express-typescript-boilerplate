import * as typeorm from "typeorm";
import { getRepository } from "typeorm";
import UserController from "../../src/controllers/user.controller";
import { User } from "../../src/models/user.model";

(typeorm as any).getRepository = jest.fn();

let res: any = {};
let req: any = {};

describe(".getAllUsers", () => {
  const userData: User = {
    id: 1,
    firstName: "John",
    lastName: "Smith",
  };

  res.json = jest.fn().mockReturnValue("foo");

  test("it should fetch all user", async () => {
    (typeorm as any).getRepository.mockReturnValue({
      find: () => Promise.resolve(userData),
    });

    expect(await UserController.getAllUsers(req, res)).toEqual(userData);
  });
});
