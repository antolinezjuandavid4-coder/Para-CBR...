export const UNLOCK_AT='2026-09-28T07:00:00Z';
export function timeLeft(target,now=Date.now()){
  const end=Date.parse(target);if(!Number.isFinite(end))return null;
  const total=Math.max(0,Math.ceil((end-now)/1000));
  return {total,days:Math.floor(total/86400),hours:Math.floor(total/3600)%24,minutes:Math.floor(total/60)%60,seconds:total%60};
}
export function correctAnswer(value){return String(value).trim().toLocaleLowerCase('es')==='salchipapa'}
export function cooldownLeft(until,now=Date.now()){return Math.max(0,Math.ceil((until-now)/1000))}
export function mountGate(onUnlock,target=UNLOCK_AT){
  const $=s=>document.querySelector(s),key='universe-gate:'+target;
  const read=s=>{try{return localStorage.getItem(key+s)}catch{return null}};
  const save=(s,v)=>{try{localStorage.setItem(key+s,String(v))}catch{}};
  let unlocked=false,timer,until=Number(read(':cooldown'))||0;
  // Restore sensible cooldown values only; malformed storage cannot trap the visitor.
  if(until>Date.now()+30000)until=Date.now()+30000;
  const input=$('#backup-answer'),submit=$('#backup-submit');
  document.body.classList.add('waiting-for-launch');
  function unlock(){
    if(unlocked)return;unlocked=true;clearInterval(timer);
    $('#launch-gate').hidden=true;document.body.classList.remove('waiting-for-launch');
    input.blur();onUnlock();
  }
  function tick(){
    if(unlocked)return;
    const remaining=timeLeft(target);
    if(remaining&&remaining.total===0){unlock();return}
    if(remaining){for(const unit of ['days','hours','minutes','seconds'])$('#count-'+unit).textContent=String(remaining[unit]).padStart(2,'0')}
    else{$('#gate-status').textContent='El reloj perdió la señal. Nuestra clave estelar puede abrirte el camino.';$('.backup-access').open=true}
    const cooldown=cooldownLeft(until);
    input.disabled=submit.disabled=cooldown>0;
    $('#backup-cooldown').textContent=cooldown?'Recalibrando la señal… '+cooldown+' s':'';
    if(!cooldown&&until){until=0;save(':cooldown',0);$('#backup-status').textContent='La señal está lista. Puedes intentarlo de nuevo.'}
  }
  $('#backup-form').addEventListener('submit',e=>{
    e.preventDefault();if(unlocked||cooldownLeft(until)>0)return;
    if(correctAnswer(input.value)){save(':open','yes');unlock();return}
    until=Date.now()+30000;save(':cooldown',until);input.value='';
    $('#backup-status').textContent='Esa no es nuestra coordenada. Penitencia cósmica: espera 30 segundos y vuelve a intentarlo.';
    tick();
  });
  if(read(':open')==='yes'){unlock();return}
  tick();if(!unlocked)timer=setInterval(tick,250);
  document.addEventListener('visibilitychange',tick);
  addEventListener('pageshow',tick);
  addEventListener('storage',e=>{if(e.key===key+':open'&&e.newValue==='yes')unlock();if(e.key===key+':cooldown'){until=Number(e.newValue)||0;tick()}});
}
