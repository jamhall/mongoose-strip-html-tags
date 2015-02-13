# mongoose-strip-html-tags

Strip html tags from your model string attributes.

Install:

    npm install mongoose-strip-html-tags --save

Usage:

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./mongoose-strip-html-tags')(mongoose);
var company = new Schema({
    name: {
      type: String,
      stripHtmlTags: true
    }
  }
);
```

