import jsonfile from "jsonfile";

abstract class ModelUsers {
  static getAllUsers = () => {
    try {
      const data = jsonfile.readFileSync("./src/db/db.json");
      const mappedData = data.users.map((user: any) => {
        const { username, email } = user;
        return {
          username,
          email,
        };
      });
      return mappedData;
    } catch (error) {
      return { error: "ERROR_TO_READ_DB" };
    }
  };
}

export { ModelUsers };
