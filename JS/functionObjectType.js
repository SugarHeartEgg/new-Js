function arraycopy(
  /* array */ form, /* index */ form_start,
  /* array */ to, /* index */ to_start,
  /* integer */ length
) {
  // console.log(length);
  // console.log(form);
  // console.log(to_start);
  // console.log(form_start);
  // console.log(to);
}

function easycopy(args) {
  arraycopy(
    args.form,
    args.form_start || 0,
    args.to,
    args.to_start || 0,
    args.length)
}
let a = "1, 2, 3, 4, 5, 6, 7"
let b = []
easycopy({ form: a, to: b, length: 7 })



const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);

function sum(a) {
  if ($.isArray(a)) {
    var total = 0;
    for (var i = 0; i < a.length; i++) {
      var element = a[i]
      if (element == null) continue;
      if (isFinite(element)) total += element
      else throw new Error("元素必须是有限的数")
    }
    return total
  } else {
    throw new Error("参数必须是数组")
  }
}
sum([])

