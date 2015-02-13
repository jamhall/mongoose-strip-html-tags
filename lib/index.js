module.exports = function (mongoose) {
  var S = require('string');
  var Schema = mongoose.Schema;
  Schema.Types.String.prototype.stripHtmlTags = function () {
    return this.set(function (v, self) {
      if ('string' != typeof v) v = self.cast(v);
      if (v) return S(v).stripTags().s;
      return v;
    });
  };
  return Schema.Types.String;
};
