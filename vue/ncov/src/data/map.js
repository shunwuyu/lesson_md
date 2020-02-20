import area from './area.json'
import { getPinyinByName } from '../data/zhen'

export default function buildMapData (province) {
  const mapData = {
    updateTime: area.lastUpdateTime,
    total: null,
    today: null,
    map: null,
    table: null,
    isProvince: false,
    chinaDayList: null
  }
  const provinces = area.areaTree[0].children
  const provincePinyin = getPinyinByName(province)
  const result = []
  console.log(provinces);
  if (province) {
    
    const index = provinces.findIndex(p => {
      return p.name === province
    })
    mapData.isProvince = true
    mapData.total = provinces[index]['total']
    mapData.today = provinces[index]['today']
    mapData.table = provinces[index]['children']
    provinces[index]['children'].forEach(city => {
      result.push({
        name: city.cityName,
        value: city.total.confirm
      })
    })
  } else {
    provinces.forEach(p => {
      result.push({
        name: p.name,
        value: p.total.confirm
      })
    })
    mapData.total = area.chinaTotal
    mapData.today = area.chinaAdd
    mapData.table = area.areaTree[0].children
  }
  return mapData
}