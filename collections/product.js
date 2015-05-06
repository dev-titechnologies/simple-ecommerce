Products = new Meteor.Collection('products');
GroundDB(Products);

Schemas = {};

Schemas.Products = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  
  name: {
    type: String,
    label: 'Product Name'
  },

  price: {
    type: Number,
    min: 0,
    decimal: true,
    label: 'Price'
  },

  quantity: {
    type: Number,
    min: 0,
    label: 'Quantity in Stock'
  },

  createdAt: {
    type: Date,
    optional: true,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },
});

Products.attachSchema(Schemas.Products);

// Products.allow({
//   insert: function (userId, product) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return true;
//     }
//   },

//   update: function (userId, product) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return true;
//     }
//   }
// });

// Products.deny({
//   insert: function (userId, product) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return false;
//     }
//   },

//   update: function (userId, product) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return false;
//     }
//   }
// });
