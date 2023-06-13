import { AxiosResponse } from "axios";
import axios from "axios";
import { ProductResponse } from "../../models/ProductModel";

const api = import.meta.env.VITE_DB_URL;

export default class ProductsService {
  static async getByName(
    name: string
  ): Promise<AxiosResponse<ProductResponse>> {    
    return axios.get<ProductResponse>(`${api}/search.php?s=${name}`);
  }
  static async getByFirstLetter(
    letter: string
  ): Promise<AxiosResponse<ProductResponse>> {
    return axios.get<ProductResponse>(`${api}/search.php?f=${letter}`);
  }
  static async getRandom(): Promise<AxiosResponse<ProductResponse>> {
    return axios.get<ProductResponse>(`${api}/random.php`);
  }
}
