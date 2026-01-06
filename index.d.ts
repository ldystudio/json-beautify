/*
* json-beautify typings
* @author TeodorDre
* @Github - https://github.com/TeodorDre
*
*/

declare module 'json-beautify' {
  export default function beautify (value: any, space?: number | string, replacer?: Function | object | any[] | null, limit?: number): string
}
