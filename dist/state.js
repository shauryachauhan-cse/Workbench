/* Pure state operations are shared by the browser and Node's test runner. */
(function(root){
  const key='saath-v1';
  const day=now=>new Date(now).toDateString();
  function defaults(now=Date.now()){
    return {profileVersion:2,name:'',caregiver:'',relationship:'',phone:'',date:day(now),activities:[
      {id:1,title:'Enjoy your breakfast',time:'09:00',note:'Your breakfast is ready at the dining table.',done:false},
      {id:2,title:'Water the plants',time:'10:30',note:'Spend a little time with your balcony plants.',done:false},
      {id:3,title:'Afternoon tea',time:'16:00',note:'A warm cup of tea and a familiar face.',done:false}
    ],memories:[{title:'Our Sunday garden',note:'A quiet Sunday tending the balcony plants.'}],history:[]};
  }
  const text=(value,fallback,max=220)=>typeof value==='string'&&value.trim()?value.trim().slice(0,max):fallback;
  function normalize(value,now=Date.now()){
    const base=defaults(now);if(!value||typeof value!=='object'||Array.isArray(value))return base;
    for(const field of ['name','caregiver','relationship'])base[field]=text(value[field],base[field],80);
    base.phone=typeof value.phone==='string'?value.phone.slice(0,40):'';
    base.date=typeof value.date==='string'?value.date:base.date;
    if(Array.isArray(value.activities)){
      const ids=new Set();base.activities=value.activities.filter(a=>a&&Number.isSafeInteger(a.id)&&!ids.has(a.id)&&ids.add(a.id)&&typeof a.title==='string'&&a.title.trim()&&/^([01]\d|2[0-3]):[0-5]\d$/.test(a.time)).map(a=>({id:a.id,title:text(a.title,'Activity',80),time:a.time,note:text(a.note,'',160),done:a.done===true})).sort((a,b)=>a.time.localeCompare(b.time));
    }
    base.memories=Array.isArray(value.memories)?value.memories.filter(m=>m&&typeof m.title==='string'&&m.title.trim()&&typeof m.note==='string'&&m.note.trim()).map(m=>({title:text(m.title,'',80),note:text(m.note,'',220)})):[];
    base.history=Array.isArray(value.history)?value.history.filter(h=>h&&typeof h.title==='string'&&typeof h.done==='boolean'&&Number.isFinite(Date.parse(h.at))).slice(-200).map(h=>({title:text(h.title,'Activity',80),done:h.done,at:new Date(h.at).toISOString()})):[];
    if(value.profileVersion!==2){
      if(base.name==='Meera')base.name='';
      if(base.caregiver==='Ananya'&&!base.phone){
        base.caregiver='';
        if(base.relationship==='Your daughter')base.relationship='';
      }
      const originalTea='Afternoon tea with Ananya';
      const originalTeaNote='A warm cup of tea and a familiar face.';
      for(const activity of base.activities){
        if(activity.id===3&&activity.title===originalTea&&activity.note===originalTeaNote){
          activity.title='Afternoon tea';
        }
      }
      for(const entry of base.history){
        if(entry.title===originalTea)entry.title='Afternoon tea';
      }
      for(const memory of base.memories){
        if(memory.title==='Our Sunday garden'&&memory.note==='Ananya and Meera enjoy tending the balcony plants together.'){
          memory.note='A quiet Sunday tending the balcony plants.';
        }
      }
    }
    return rollover(base,now);
  }
  function rollover(state,now=Date.now()){
    if(state.date!==day(now)){state.activities.forEach(a=>a.done=false);state.date=day(now)}return state;
  }
  function toggle(state,id,now=Date.now()){
    rollover(state,now);const a=state.activities.find(a=>a.id===id);if(!a)return false;
    a.done=!a.done;state.history.push({title:a.title,done:a.done,at:new Date(now).toISOString()});state.history=state.history.slice(-200);return true;
  }
  function editActivity(state,id,details){
    const activity=state.activities.find(item=>item.id===id);
    const title=text(details.title,'',80);
    if(!activity||!title||!/^([01]\d|2[0-3]):[0-5]\d$/.test(details.time))return false;

    activity.title=title;
    activity.time=details.time;
    activity.note=text(details.note,'',160);
    state.activities.sort((first,second)=>first.time.localeCompare(second.time));
    return true;
  }
  function load(storage,now=Date.now()){try{return normalize(JSON.parse(storage.getItem(key)),now)}catch{return defaults(now)}}
  function save(storage,state){try{storage.setItem(key,JSON.stringify(state));return true}catch{return false}}
  const api={defaults,normalize,rollover,toggle,editActivity,load,save};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.SaathState=api;
})(typeof window!=='undefined'?window:globalThis);
