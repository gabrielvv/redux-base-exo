/**
 * Fonction isPhoneError()
 *  - prend un phone en paramètre
 *    - contrôle de validité du name (non vide)
 *    - contrôle de validité du price (non vide et numérique)
 *
 * Retourne un objet errors de type :
 * {
 *    isInError: boolean,
 *    errors: {
 *      name: ' : ne doit pas être vide'
 *      price: ' : doit être en chiffres'
 *      (ou) price: ' : ne doit pas être vide'
 *   }
 * }
 * S'il n'y a pas d'erreur ne pas retourner la clé name ou price
 */

export default function getPhoneErrors(phone) {
  const errors = {}

  if (!phone.name.length) {
    errors.name = ' : ne doit pas être vide'
  }

  if (!Number(phone.price)) {
    errors.price = ' : doit être en chiffres'
  }

  if (!phone.price.length) {
    errors.price = ' : ne doit pas être vide'
  }

  return {
    isInError: !!Object.keys(errors).length,
    errors
  }
}