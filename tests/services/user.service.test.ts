import connection from "../../src/utils/connection";
import { getRepository } from "typeorm";
import { User } from "../../src/models/user.model";
import UserService from "../../src/services/user.service";

describe(".getAllUsers", () => {
  const user = new User();
  user.userName = "timber123";
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.email = "timber@gmail.com";
  user.password = "123456789";

  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  afterEach(async () => {
    await connection.clear();
  });

  test("it should fetch all user", async () => {
    await getRepository(User).save(user);

    expect((await UserService.findAll()).length).toEqual(1);
  });
});
