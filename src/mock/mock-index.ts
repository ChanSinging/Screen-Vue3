import Mock from "mockjs";
//处理路径传参
import {parameteUrl} from "@/utils/query-param"
//左上
export default [
    {
        url: "/bigscreen/countUserNum",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    offlineNum: '@integer(1, 100)',
                    lockNum: '@integer(1, 10)',
                    totalNum: 218
                }
            })
            a.data.onlineNum = a.data.totalNum - a.data.offlineNum - a.data.lockNum
            return a
        },
    },

];
