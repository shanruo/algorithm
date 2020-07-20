String.prototype.render = function(context) {
  return this.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]);
};

const context = {
  name: '小明',
  age: '13',
};
const template = '{{name}}很name厉害，才{{age}}岁';
console.log(template.render(context));
