import { BaseApi } from "./BaseApi";


export class ProductApi extends BaseApi {

    constructor() {
        super("/dashboard/producto");
    }

    /*async getProducts (): Promise<Array<{id: string,name: string}>> {
        return await this.apiGet( `/verProductos` )
    }*/

    async editProduct (product: Product) {
      return await this.apiPost('/editar',product)
    }

    async createProduct (product: NewProduct) {
      return await this.apiPost('/crear',product)
    }

    async deleteProduct (product: Product) {
      return await this.apiPost('/eliminar',product)
    }

    async getProducts () {
      return await this.apiPost('/verProductos', 0)
    }
}

interface NewProduct {
  nombre: String;
  prioridad: number;
}

interface Product {
  id: number;
  nombre: String;
  prioridad: number;
}

interface ProductWindow {
  id: number;
  nombre: String;
  idZonaVidriera: number;
}
