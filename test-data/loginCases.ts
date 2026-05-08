type LoginSuccessCase = {
  name: string;
  username: string;
  password: string;
  expected: {
    outcome: "success";
    message: string;
  };
};

type LoginFailureCase = {
  name: string;
  username: string;
  password: string;
  expected: {
    outcome: "error";
    message: string;
  };
};

export type LoginCase = LoginSuccessCase | LoginFailureCase;

export const loginCases: readonly LoginCase[] = [
  {
    name: "valid login",
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expected: {
      outcome: "success",
      message: "You logged into a secure area!"
    }
  },
  {
    name: "invalid username",
    username: "invalid-user",
    password: "SuperSecretPassword!",
    expected: {
      outcome: "error",
      message: "Your username is invalid!"
    }
  },
  {
    name: "invalid password",
    username: "tomsmith",
    password: "invalid-password",
    expected: {
      outcome: "error",
      message: "Your password is invalid!"
    }
  }
];
