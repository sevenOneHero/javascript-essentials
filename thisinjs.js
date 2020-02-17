var a = {
  name: 'Vinit',
  print: function() {
    console.log(this.name);
  },
  print2: () => console.log(this)
};

a.print();
a.print2();
