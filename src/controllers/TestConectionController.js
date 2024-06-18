class TestConectionController{
  index(req, res){
    res.json({
      tudoCerto: true
    });
  }
}

export default new TestConectionController();