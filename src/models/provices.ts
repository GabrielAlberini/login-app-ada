import jsonfile from "jsonfile";

abstract class ModelProvinces {
  static getAllProvinces = () => {
    try {
      const data = jsonfile.readFileSync("./src/db/db.json");
      return data.provinces;
    } catch (error) {
      return { error: "ERROR_TO_READ_DB" };
    }
  };
}

export { ModelProvinces };
