/**
 * PhoneApi
 *
 * - getAllPhones()
 * - getPhoneById(id)
 * - savePhone() : méthode PUT si ajout, POST si modification
 */

import axios from 'axios'
import Constants from '../Constants'

const PhoneApi = {
  getAllPhones() {
    return new Promise(resolve => {
      axios.get(Constants.PRODUCTS_URL).then(res => {
        resolve(res.data)
      })
    })
  },

  getPhoneById(id) {
    return new Promise(resolve => {
      axios.get(`${Constants.PRODUCTS_URL}/${id}`).then(res => {
        resolve(res.data)
      })
    })
  },

  savePhone(phone) {
    const { id, name, price } = phone
    const url = id ? `${Constants.PRODUCTS_URL}/${id}` : Constants.PRODUCTS_URL
    const method = id ? 'PUT' : 'POST'

    return axios({
      method,
      url,
      data: {
        name,
        price: String(price)
      }
    })
  }
}

export default PhoneApi
