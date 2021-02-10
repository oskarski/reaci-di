import { injectable } from "tsyringe";

@injectable()
export default class ApiService {
  getTemperature(): Promise<number> {
    return new Promise(resolve => {
      setTimeout(
        () => resolve(parseInt(`${Math.random() * 50 - 20}`, 10)),
        2000
      );
    });
  }
}
