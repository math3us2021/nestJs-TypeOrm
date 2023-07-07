export type CreatePerson = {
  name: string;
  age: number;
  email: string;
};

export type UpdatePersonParams = {
  name: string;
  age: number;
  email: string;
};

export type CreateProfile = {
  username: string;
  password: string;
};

export type CreatePosts = {
  title: string;
  description: string;
};
