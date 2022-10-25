import Mock from "mockjs";
//处理路径传参
import { parameteUrl } from "@/utils/query-param"

function ArrSet(Arr: any[], id: string): any[] {
    let obj: any = {}
    const arrays = Arr.reduce((setArr, item) => {
        obj[item[id]] ? '' : (obj[item[id]] = true && setArr.push(item))
        return setArr
    }, [])
    return arrays
}

//左中
export default [
    {
        url: "/bigscreen/countUserNum",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    offlineNum: '@integer(50, 100)',
                    alarmNum: '@integer(20, 100)',
                    lockNum: '@integer(10, 50)',
                    totalNum: 368
                }
            })
            a.data.onlineNum = a.data.totalNum - a.data.offlineNum - a.data.lockNum - a.data.alarmNum
            return a
        },
    },
    {
        url: "/bigscreen/countDeviceNum",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    alarmNum: '@integer(100, 1000)',
                    offlineNum: '@integer(0, 50)',
                    totalNum: 698
                }
            })
            a.data.onlineNum = a.data.totalNum - a.data.offlineNum
            return a
        }
    },
    {
        url: "/bigscreen/centerMap",
        type: "get",
        response: (options: any) => {
            let params = parameteUrl(options.url)
            //不是中国的时候
            if (params.regionCode && !["china"].includes(params.regionCode)) {
                const a = Mock.mock({
                    success: true,
                    data: {
                        "dataList|100": [
                            {
                                name: "@city()",
                                value: '@integer(1, 1000)'
                            }
                        ],
                        regionCode: params.regionCode,//-代表中国
                    }
                })
                return a
            } else {
                const a = Mock.mock({
                    success: true,
                    data: {
                        "dataList|12": [
                            {
                                name: "@province()",
                                value: '@integer(1, 1100)'
                            }
                        ],
                        regionCode: 'china',
                    }
                })
                // 去重
                a.data.dataList = ArrSet(a.data.dataList,"name")
                return a
            }
        }
    }
];

