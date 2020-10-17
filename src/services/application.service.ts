import { User } from "../models/user.model";
import { getRepository } from "typeorm";
import LoginRequest from "../interfaces/requests/login.request";
import SignUpRequest from "../interfaces/requests/signup.request";

class ApplicationController {
  async login(requestBody: LoginRequest) {
    let currentUser = await getRepository(User).findOne({ email: requestBody.email });

    if (currentUser && currentUser.comparePassword(requestBody.password)) {
      return { flash: "success" };
    } else {
      return { flash: "failed" };
    }
  }

  async signUp(requestBody: SignUpRequest) {
    const newUser = getRepository(User).create(
      requestBody
    );
    const result = await getRepository(User).save(newUser)
    return result
  }
}

export default new ApplicationController();
