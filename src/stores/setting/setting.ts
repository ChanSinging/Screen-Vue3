import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import { storeToRefs } from 'pinia';
export const useSettingStore = defineStore('setting', () => {
  const settingShow = ref(false);//设置弹窗显隐
  const isScale = ref(false);//是否进行全局适配

  const setSettingShow = (flag:boolean)=>{
    settingShow.value=flag
  }
  const setIsScale = (flag:boolean)=>{
    isScale.value=flag
    setSettingData()
  }
  const initSetting=()=>{
    let settingData:any = localStorage.getItem('loftv-settingData')
    if(settingData){
        settingData=JSON.parse(settingData)
        setIsScale(settingData.isScale)
    }
  }
  const setSettingData=()=>{
    localStorage.setItem('loftv-settingData',JSON.stringify({
        isScale:isScale.value
    }))
  }
  return { settingShow, setSettingShow,isScale ,setIsScale,initSetting,setSettingData}
})
