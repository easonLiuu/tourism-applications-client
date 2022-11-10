export default {
  'GET /api/getLists': {
    lists: ['a', 'b', 'c']
  },
  'GET /api/getListsAsync': (req, res)=>{
    console.log(req)
    setTimeout(() => {
      res.json({
        lists: Array(10).fill(req.query.value)
      })
    }, 1000);
    
  }
}