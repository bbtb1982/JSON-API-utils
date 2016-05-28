import { parse_model, parse_model_1 } from '../app/utils/utils.js'
import { parse_values } from '../app/utils/utils.js'
import { parse_filters } from '../app/utils/utils.js'
var expect = require('chai').expect

describe('Array', function() {
  describe('filter[post]=1,2,3', function () {
    it('it should return post from string', function () {
      var queryParam = "filter[post]=1,2,3";
      var model = queryParam.match(/[^filter=\[].[^\]]*/gi)[0]
      expect(model).to.equal('post');
    });

    it('it should return post from string', function () {
      expect(parse_model("filter[post]=1,2,3")).equal('post');
    });

    it('parse_model_1() should return the model key', function () {
      expect(parse_model_1("filter[post]=1,2,3")).equal('post');
    });

    it('parse_vaules should return an array of ids', function(){
      expect(parse_values("filter[post]=1,2,3")).to.deep.equal([1,2,3])
    })

    it('it should parse multiple filter query Params', function () {
      var params = parse_filters("filter[post]=1,2,3&filter[tag]=3,2,1")
      expect(params).to.have.all.keys('post', 'tag');
      expect(params['post']).to.deep.equal([1,2,3]);
      expect(params['tag']).to.deep.equal([3,2,1]);
    });
  });
});
