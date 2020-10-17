import * as typeorm from "typeorm";
import UserService from "../../src/services/user.service";
import { AllUsersResponse } from "../../src/interfaces/responses/user.response";

(typeorm as any).getRepository = jest.fn();

describe(".getAllUsers", () => {
  const userData: AllUsersResponse = [
    { id: 1, firstName: "John", lastName: "Smith" },
  ];

  test("it should fetch all user", async () => {
    (typeorm as any).getRepository.mockReturnValue({
      find: () => Promise.resolve(userData),
    });

    expect(await UserService.findAll()).toEqual(userData);
  });
});
