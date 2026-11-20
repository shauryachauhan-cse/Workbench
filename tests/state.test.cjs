const test=require('node:test');
const assert=require('node:assert/strict');
const S=require('../dist/state.js');
const now=new Date(2026,10,2,12).getTime();
test('check-off and undo produce timestamped history',()=>{const s=S.defaults(now);S.toggle(s,1,now);assert.equal(s.activities[0].done,true);S.toggle(s,1,now+1000);assert.equal(s.activities[0].done,false);assert.deepEqual(s.history.map(h=>h.done),[true,false]);assert.equal(s.history[0].at,new Date(now).toISOString())});
test('new day resets routines while retaining memories and history',()=>{const s=S.defaults(now);S.toggle(s,1,now);S.rollover(s,now+86400000);assert.equal(s.activities[0].done,false);assert.equal(s.history.length,1);assert.equal(s.memories.length,1)});
test('old browser profiles migrate without losing their routines',()=>{const old={...S.defaults(now),memories:undefined,history:undefined};const s=S.normalize(old,now);assert.equal(s.activities.length,3);assert.deepEqual(s.history,[]);assert.deepEqual(s.memories,[])});
test('invalid stored items cannot break rendering or duplicate activity identities',()=>{const s=S.normalize({date:S.defaults(now).date,activities:[null,{id:1,title:'Walk',time:'10:00',done:true},{id:1,title:'Duplicate',time:'11:00'},{id:2,title:'Bad time',time:'99:00'}],memories:[null],history:[{at:'invalid'}]},now);assert.equal(s.activities.length,1);assert.equal(s.activities[0].done,true);assert.deepEqual(s.history,[])});
test('corrupt or unavailable storage leaves the demo usable',()=>{assert.equal(S.load({getItem(){return '{bad json'}},now).name,'');assert.equal(S.load({getItem(){throw Error('Blocked')}},now).activities.length,3);assert.equal(S.save({setItem(){throw Error('Quota')}},S.defaults(now)),false)});
test('history is bounded and unknown IDs are ignored',()=>{const s=S.defaults(now);for(let i=0;i<205;i++)S.toggle(s,1,now+i);assert.equal(s.history.length,200);assert.equal(S.toggle(s,-1,now),false);assert.equal(s.history.length,200)});

test('editing a routine reorders it while retaining its completion and history', () => {
  const state = S.defaults(now);
  S.toggle(state, 1, now);

  assert.equal(S.editActivity(state, 1, { title: ' Breakfast ', time: '18:00', note: ' Dining table ' }), true);
  assert.deepEqual(state.activities.at(-1), {
    id: 1, title: 'Breakfast', time: '18:00', note: 'Dining table', done: true
  });
  assert.equal(state.history[0].title, 'Enjoy your breakfast');

  assert.equal(S.editActivity(state, 1, { title: ' ', time: '09:00' }), false);
  assert.equal(S.editActivity(state, 1, { title: 'Breakfast', time: '99:00' }), false);
  assert.equal(state.activities.at(-1).time, '18:00');
});

test('new profiles start blank and old sample details are removed on load', () => {
  const { profileVersion, ...legacy } = S.defaults(now);
  assert.deepEqual([legacy.name, legacy.caregiver, legacy.relationship, legacy.phone], ['', '', '', '']);
  legacy.name = 'Meera';
  legacy.caregiver = 'Ananya';
  legacy.relationship = 'Your daughter';
  legacy.activities[2].title = 'Afternoon tea with Ananya';

  const migrated = S.normalize(legacy, now);
  assert.equal(migrated.name, '');
  assert.equal(migrated.caregiver, '');
  assert.equal(migrated.relationship, '');
  assert.equal(migrated.activities[2].title, 'Afternoon tea');

  const custom = S.normalize({ ...legacy, name: 'Demo visitor' }, now);
  assert.equal(custom.name, 'Demo visitor');
  assert.equal(S.normalize({ ...migrated, name: 'Meera' }, now).name, 'Meera');
});
