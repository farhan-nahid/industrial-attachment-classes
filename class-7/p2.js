const array = [1, [2, 4], { props1: 'some', props2: 'another' }];

// problem1: v3 => okay but I am Board & nothing

const st = [{ k1: 'v1', k2: 'v3' }, 2, 20, [10, 15, [6, { prop: 'okay' }, 'I am Board'], 'nothing'], 'Thats it'];

console.log(st[3][2][2]);

console.log(`${st[0].k2} => ${st[3][2][1].prop} but ${st[3][2][2]} & ${st[3][3]}`);

const problem = [
  { k1: 'v1', k2: 'b3' },
  2,
  { every: 'every thing' },
  20,
  [10, (15)[(6, { prop: 'okay' }, 'Money')], ['nothing']],
  'is',
  ['give'],
  [{ money: 'tk' }],
];

// problem2: vai money is everything .give me 20 tk now

/* 

erp => enterprise resource planning

*/
