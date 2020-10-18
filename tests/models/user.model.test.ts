import { getRepository } from "typeorm";
import connection from "../../src/utils/connection";
import { User } from "../../src/models/user.model";

describe("User Model", () => {
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

  test("it should create user", async () => {

    await getRepository(User).save(user);

    const loadedUser = await getRepository(User).findOne(user);

    expect(loadedUser).toBeDefined();
  });
});

