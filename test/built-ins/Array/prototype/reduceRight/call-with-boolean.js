// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceRight
description: Array.prototype.reduceRight applied to boolean primitive
features: [arrow-function]
---*/

assert.sameValue(
  Array.prototype.reduceRight.call(true, () => {}, -1),
  -1,
  'Array.prototype.reduceRight.call(true, () => {}, -1) must return -1'
);
assert.sameValue(
  Array.prototype.reduceRight.call(false, () => {}, -1),
  -1,
  'Array.prototype.reduceRight.call(false, () => {}, -1) must return -1'
);
