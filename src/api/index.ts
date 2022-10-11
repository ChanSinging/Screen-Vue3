/*
 * @Author: daidai
 * @Date: 2021-12-23 11:18:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-11 15:43:20
 * @FilePath: \web-pc-svn\src\api\modules\index.js
 */

import {GET,POST,FILE,FILEPOST,PUT} from "./api";
import Index from "./modules"
interface urlObj {
    [key:string| number]:string
}
export const urlObj:urlObj = {
  ...Index,
};

type Keys=string | number
export const currentGET = (key:Keys, param?: any) => {
  return GET(urlObj[key], param||{});
};
export const currentGETPath = (key:Keys,type:string|string[], param?: any) => {
  return GET(urlObj[key]+type, param||{});
};
export const currentPUT = (key:Keys, param: any) => {
  return PUT(urlObj[key], param);
};
export const currentPUTPath = (key:Keys,type:Keys, param: any) => {
  return PUT(urlObj[key]+type, param);
};
export const currentPOST = (key:Keys, param?: any) => {
  return POST(urlObj[key], param||{});
};
export const currentPOSTPath = (key:Keys,type:Keys,param?: any) => {
  return POST(urlObj[key]+type, param||{});
};
//通用上传
export const currentFILEPOST = (key:Keys, param?: any) => {
  return FILEPOST(urlObj[key], param||{},{});
};

// 通用接口集合
export const currentApi = {
  currentPOST,
  currentGET,
};
