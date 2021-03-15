import qs from 'querystring'


export class editor {  // 编辑数据动作
  static apiQuery (obj) { 
    let query = '?' +  qs.stringify(obj)
    return query
  }
}