/*

FUNC HasHash ( HASH hash, STRING key )

Returns boolean == existence of key in hash

Use:
import HasHash from "@taystack/helpers";

*/
export default function HashHas(hash, key) {

  // Check the keys for the existence of the key
  return Object.keys(hash).indexOf(key) >= 0;
}
